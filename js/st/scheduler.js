ST.SchedulerAction = class {
    constructor(callback, endTurn, duration) {
        this.callback = callback;
        this.endTurn = endTurn;
        this.duration = duration;
    }
    getTurn() { return this.endTurn; }
}

ST.Scheduler = {
    actionQueue: [],
    isRunning: false,
    init: function() {
        this.actionQueue = [];
        this.isRunning = false;
    },
    add: function(callback, duration) {
        let action = new ST.SchedulerAction(callback, (ST.turn + duration), duration);
        let index = 0;
        for(let i = 0; i < this.actionQueue.length; i++) {
            if (this.actionQueue[i].getTurn() > action.getTurn()) break;
            index++;            
        }
        this.actionQueue.splice(index, 0, action);
    },
    start: function() {

        ST.Scheduler.isRunning = true;

        while(ST.Scheduler.isRunning) {

            let action = this.actionQueue.shift();
            ST.updateGameTime(action.getTurn());       

            if (ST.currentEvent != null && !ST.currentEvent.isActive(ST.turn)) {
                ST.removeEvent();
            }            

            if (typeof action.callback == "function") action.callback();
            // else throw new Error("Scheduler2: nincs act() fuggveny: " + action.obj.toString());

            ST.gamestateControl();
            if (ST.state != ST.STATE.Running) {
                ST.addToLogbook(ST.Msg["end_" + ST.statistic.endReason]);
                ST.Scheduler.isRunning = false;                
            }

            if (this.actionQueue.length == 0) { ST.Scheduler.isRunning = false; }
        }
    },
    nextAction: function() {
        if ( !ST.Scheduler.isRunning) return;

        let action = ST.Scheduler.actionQueue.shift();
        ST.updateGameTime(action.getTurn());       

        if (ST.currentEvent != null && !ST.currentEvent.isActive(ST.turn)) {
            ST.removeEvent();
        }            

        if (typeof action.callback == "function") action.callback();
        // else throw new Error("Scheduler2: nincs act() fuggveny: " + action.obj.toString());

        ST.gamestateControl();
        if (ST.state != ST.STATE.Running) {
            ST.addToLogbook(ST.Msg["end_" + ST.statistic.endReason]);
            ST.Scheduler.isRunning = false;                
        }

        if (ST.Scheduler.actionQueue.length == 0) { ST.Scheduler.isRunning = false; }

        // if (ST.Scheduler2.isRunning) {
        //     $timeout(function() { ST.Scheduler2.nextAction($timeout) }, 700);
        // }
    }
}
