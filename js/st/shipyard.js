ST.Shipyard = {
    repairDisabled: false,
    repairPrice: 0,
    upgradeDisabled: false,
    upgradePrice: {
        engine: 0,
        hull: 0,
        cargogear: 0
    },
    update: function() {
        this.repairPrice = ST.GameTables.repairPrice;

        this.repairDisabled = ST.currentLocation.portLevel < 2;
        this.upgradeDisabled = ST.currentLocation.portLevel < 3;

        this.upgradePrice.engine = ST.GameTables.upgradePrice.engine[ST.engine.max];
        this.upgradePrice.hull = ST.GameTables.upgradePrice.hull[ST.hull.max];
        this.upgradePrice.cargogear = ST.GameTables.upgradePrice.cargogear[ST.cargogear.max];

    },
    isRepairDisabled: function() {
        if (this.repairDisabled) return true;

        return false;
    },
    getRepairPrice: function() {
        var price = this.repairPrice;

        if (ST.EffectManager.hasEffect(ST.EFFECT.CHEAPER_PORT_REPAIR)) {
            price = 10;
        }

        return price;
    },
    repair: function(system) {
        system.current += 1;
        ST.money -= this.getRepairPrice();

        ST.ActionManager.set(ST.ACTION_PORT_REPAIR, this.getRepairTime());

        if (ST.EffectManager.hasEffect(ST.EFFECT.quarantine)) {
            if (ST.GameWorld.event.hasInfection()) {
                ST.addToLogbook(ST.Msg.event_quarantine_infection);
            }
        }

        ST.addToLogbook(ST.Msg.action_port_repair, [ST.ActionManager.duration]);

        if (ST.EffectManager.hasEffect(ST.EFFECT.LAZY_MECHANIC)) {
            if (ST.Utils.roll(1, 6) == 1) {
                system.current -= 1;
                ST.addToLogbook(ST.Msg.effect_unfinished_port_repair);
            }
        }
    },
    getRepairTime: function() {
        var t = ST.GameTables.actionTime[ST.ACTION_PORT_REPAIR];
        if (ST.EffectManager.hasEffect(ST.EFFECT.LABOR_SHORTAGE))
        {
            if (ST.Utils.roll(1, 6) < 3) {
                t += 6;
            }
        }
        if (ST.EffectManager.hasEffect(ST.EFFECT.computer_virus)) {
            t += ST.COMPUTER_VIRUS_TIME_LATE;
        }
        return t;
    },

    isUpgradeDisabled: function() {
        if (this.upgradeDisabled) return true;
        return false;
    },
    upgrade: function(system) {
        ST.money -= this.upgradePrice[system.id];
        system.max += 1;
        system.current = system.max;
        ST.ActionManager.set(ST.ACTION_PORT_UPGRADE, ST.Shipyard.getUpgradeTime());

        if (ST.EffectManager.hasEffect(ST.EFFECT.quarantine)) {
            if (ST.GameWorld.event.hasInfection()) {
                ST.addToLogbook(ST.Msg.event_quarantine_infection);
            }
        }

        ST.addToLogbook(ST.Msg.action_port_upgrade, [ST.Shipyard.getUpgradeTime()]);

    },
    getUpgradeTime: function() {
        var t = ST.GameTables.actionTime[ST.ACTION_PORT_UPGRADE];
        if (ST.EffectManager.hasEffect(ST.EFFECT.computer_virus)) {
            t += ST.COMPUTER_VIRUS_TIME_LATE;
        }
        return t;
    }
};