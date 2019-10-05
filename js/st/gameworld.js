ST.GameWorld = {
    lastUpdatedLocation: null,
    /*
    event: {
        startTurn: 0,
        duration: 0,
        datas: null,
        hasEvent: function() { return this.datas != null; },
        isActive: function(turn) { return this.startTurn + this.duration > turn; },
        getLastTurn: function() { return this.startTurn + this.duration; },
        getActivateMsg: function() { return ST.Msg.get(ST.Msg['event_' + this.datas.code + "_act"]); },
        getDesc: function() { return ST.Msg.get(ST.Msg['event_' + this.datas.code + "_desc"]); },
        getDeactivateMsg: function() { return ST.Msg.get(ST.Msg['event_' + this.datas.code + "_deact"]); }
    },
    */
    event: null,
    lastEventTurn: 0,
    waitNextEvent: 0,

    eventQueue: [],

    init: function() {
        this.lastUpdatedLocation = null;
        //this.event.datas = null;
        this.event = null;
        this.lastEventTurn = 2;
        this.waitNextEvent = 0;

        this.eventQueue = [];
        for(var i = 0; i < ST.GameTables.eventsOnce.length; i++) {
            this.eventQueue.push(ST.GameTables.eventsOnce[i]);
        }
        for(var i = 0; i < ST.GameTables.eventsTwice.length; i++) {
            this.eventQueue.push(ST.GameTables.eventsTwice[i]);
            this.eventQueue.push(ST.GameTables.eventsTwice[i]);
        }
        this.eventQueue = ST.Utils.shuffleArray(this.eventQueue);
        this.eventQueue = ST.Utils.shuffleArray(this.eventQueue);
    },

    //  daily update
    act: function() {

        console.log("gameworld act!!");

        this.locationUpdate();

        //this._eventUpdate();

        if (ST.AdvertisementContraband.isBankrupt()) {
            ST.addToLogbook(ST.Msg.advertismement_bankrupt);
        }

        var dailyExpense = ST.GameTables.dailyExpense + ST.crew.current;
        if (ST.EffectManager.hasEffect(ST.EFFECT.enviroment_protection_tax)) {
            dailyExpense += Math.floor(ST.GameTables.dailyExpense * 0.5);
            ST.addToLogbook(ST.Msg.effect_enviroment_protection_tax, [ST.ENVIROMENT_PROTECTION_TAX]);
        }

        if (ST.AdvertisementContraband.isActive()) {
            dailyExpense -= 10;
            ST.addToLogbook(ST.Msg.effect_advertisement_contraband, [ST.ADVERTISEMENT_PRIZE]);
        }

        ST.money -= dailyExpense;
        ST.addToLogbook(ST.Msg.new_day, [dailyExpense]);

        //  regi
        // ST.Scheduler.add(this, false, 24);

        ST.Scheduler2.add(ST.GameWorld, 24);
    },

    locationUpdate: function() {

        //if (this.lastUpdatedLocation == ST.currentLocation) return;
        if (ST.currentLocation == null || ST.currentLocation.isDeepspace()) return;

        if (this.lastUpdatedLocation != ST.currentLocation) {
            this._eventRemove();
        }

        this.lastUpdatedLocation = ST.currentLocation;

        ST.FuelStore.update();
        ST.SparepartStore.update();
        ST.Shipyard.update();
        ST.PassengerTransport.update();
        ST.JobManager.update();
        ST.CrewFind.update();
        ST.SouvenirsManager.update();
    },

    setLocation: function(loc) {
        if (ST.currentLocation == loc) return;
        this._removeLocationEffects(ST.currentLocation);
        ST.currentLocation = loc;
        this._addLocationEffects(loc);
    },

    _removeLocationEffects: function(loc) {
        if (loc == null) return;
        for(var i = 0; i < loc.effects.length; i++) {
            ST.EffectManager.removeEffect(loc.effects[i]);
        }
    },

    _addLocationEffects: function(loc) {
        if (loc == null) return;
        for(var i = 0; i < loc.effects.length; i++) {
            ST.EffectManager.addEffect(loc.effects[i]);
        }
    },

    hasEvent: function() { return this.event != null; },

    getEventDesc: function() {
        if (this.hasEvent()) return this.event.getDesc();
        return "";
    },

    getEffectMsg: function() {
        if (this.hasEvent()) return this.event.getEffectMsg();
        return "";
    },

    eventControl: function() {
        ST.GameWorld._eventStatusControl();
        ST.GameWorld._eventUpdate();
        ST.GameWorld._eventInstant();
    },

    _eventStatusControl: function() {
        if (this.hasEvent()) {
            if (this.event.isActive(ST.turn)) {
                return;
            }
            else {
                this._eventRemove();
            }
        }
    },

    _eventUpdate: function() {
        if (this.hasEvent()) return;

        if (ST.position == ST.POSITION.Space) return;

        if (this.lastEventTurn + this.waitNextEvent > ST.turn) return;

        //  teszt
        //this.event = new ST.Events['wreck_traction']();
        var e = this.eventQueue.pop();
        this.event = new ST.Events[e];

        if (this.event.canTrigger()) {
            this.event.startTurn = ST.turn;
            this.event.duration = ST.Utils.roll(this.event.getMinDuration(), this.event.getMaxDuration());
            ST.EffectManager.addEffect(this.event.getEffect());

            ST.Logbook.addNote(this.event.getActivateMessage());

            console.log("event start at turn " + this.event.startTurn + ", duration: " + this.event.duration + ", event code: " + this.event.code);
        }
        else {
            this.eventQueue.push(e);
        }

        if (this.hasEvent()) {
            this.event.activate();
        }
    },

    //  instant event vegrehajtasa
    _eventInstant: function() {
        if ( !this.hasEvent()) return;
        this.event.execute();
    },

    _eventRemove: function() {
        if ( !this.hasEvent()) return;
        this.lastEventTurn = this.event.getLastTurn();
        ST.EffectManager.removeEffect(this.event.getEffect());
        ST.Logbook.addNote(this.event.getDeactivateMessage());
        this.event = null;
        this.waitNextEvent = ST.Utils.roll(18, 26);
        console.log("event removed, to next event wait: " + this.waitNextEvent + " turn");
    },

    //  event befejezve
    eventFinished: function() {
        this._eventRemove();
    }


};