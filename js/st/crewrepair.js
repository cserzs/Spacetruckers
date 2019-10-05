ST.CrewRepair = {
    repair: function(system) {
        ST.spareparts.current -= 1;
        system.current += 1;

        if (ST.Utils.roll(1, 6) > ST.crew.current) {
            //  sikertelen javitas
        }

        ST.ActionManager.set(ST.ACTION_CREW_REPAIR, this.getRequiredTime());
        ST.addToLogbook(ST.Msg.action_crew_repair, [this.getRequiredTime()]);
    },
    getRequiredTime: function() {
        return ST.GameTables.actionTime[ST.ACTION_CREW_REPAIR];
    }
};