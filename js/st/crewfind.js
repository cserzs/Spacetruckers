ST.CrewFind = {
    available: 0,
    hasWorker: function() { return this.available > 0; },
    update: function() {
        var roll = ST.Utils.roll(0, 6);
        this.available = ST.GameTables.crewAvailable[ST.currentLocation.population][roll];

        if (ST.EffectManager.hasEffect(ST.EFFECT.PRISON_PLANET)) {
            this.available = 0;
        }
        if (ST.EffectManager.hasEffect(ST.EFFECT.quarantine)) {
            this.available = 0;
        }
    },
    hire: function() {
        ST.crew.current += 1;
        this.available -= 1;

        ST.ActionManager.set(ST.ACTION_CREW_HIRE, this.getRequiredTime());
        ST.addToLogbook(ST.Msg.action_crew_hire);
    },
    getRequiredTime: function() {
        return ST.GameTables.actionTime[ST.ACTION_CREW_HIRE];
    }
};