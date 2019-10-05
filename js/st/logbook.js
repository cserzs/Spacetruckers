//  konyveles szeruen tarolni dolgokat
//      penz: naponta mennyi volt a bevetel es mennyi a kiadas, nap vegi egyenleg
//      budget
//          nap => kiadas, bevetel, penz

ST.Logbook = {
    recents: [],
    logs: [],
    init: function() {
        this.recents = [];
        this.logs = [];
    },
    addNote: function(msg) {
        if (msg == "" || msg == null || msg == undefined) return;
        var n = {
            turn: ST.turn,
            date: ST.gameDate,
            msg: msg
        };
        this.recents.push(n);
        this.logs.push(n);
    },
    clearRecent: function() {
        this.recents = [];
    },
    //  kitorli az 5 napnal regebbi bejegyzeseket
    clearOld: function() {
        let limit = ST.turn - 24 * 5;
        ST.Logbook.logs = ST.Logbook.logs.filter(function(el) { return el.turn > limit; });
    }
};
