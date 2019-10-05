
ST.Events = {};

ST.Event = class {
    constructor(code, durationRange, effect) {
        this.code = code;
        this.durationRange = durationRange;
        this.effect = effect;
        this.startTurn = 0;
        this.duration = 0;
    }
    canTrigger() { return true; }
    //  ha aktivalodik, akkor ez vegrehajtodik
    activate(turn) {
        this.startTurn = turn;
        this.duration = ST.Utils.roll(this.durationRange[0], this.durationRange[1]);
    }
    // Azonnal vegrehajtodo eventekhez.
    execute() {}
    getMinDuration() { return this.durationRange[0]; }
    getMaxDuration() { return this.durationRange[1]; }
    getLastTurn() { return this.startTurn + this.duration; }
    isActive(turn) { return (this.startTurn + this.duration > turn); }
    getEndTurn() { return this.startTurn + this.duration; }
    getRemaining(currentTurn) { return (this.startTurn + this.duration - currentTurn); }
    getEffect() { return this.effect; }
    getEffectMsg() { return ST.getMsg(ST.Msg['effect_' + this.effect]); }
    getActivateMessage() { return ST.getMsg(ST.Msg['event_' + this.code + "_act"]); }
    getDesc() { return ST.getMsg(ST.Msg['event_' + this.code + "_desc"]); }
    getDeactivateMessage() { return ST.getMsg(ST.Msg['event_' + this.code + "_deact"]); }
}

//  ==========================================================================================================

ST.Events.storm_1 = class extends ST.Event {
    constructor() {
        super("storm_1", [24, 36], ST.EFFECT.storm_1);
    }
}

ST.Events.storm_2 = class extends ST.Event {
    constructor() {
        super("storm_2", [8, 24], ST.EFFECT.storm_2);
    }
}

ST.Events.storm_3 = class extends ST.Event {
    constructor() {
        super("storm_3", [24, 36], ST.EFFECT.storm_3);
    }
}

ST.Events.computer_virus = class extends ST.Event {
    constructor() {
        super("computer_virus", [12, 36], ST.EFFECT.computer_virus);
    }
}

ST.Events.corrupt_port_boss = class extends ST.Event {
    constructor() {
        super("corrupt_port_boss", [20, 28], ST.EFFECT.corrupt_port_boss);
    }
}

ST.Events.hard_worker_sailor = class extends ST.Event {
    constructor() {
        super("hard_worker_sailor", [20, 28], ST.EFFECT.hard_worker_sailor);
    }
    canTrigger() { return ST.crew.current > 0; }
}

ST.Events.crew_accident = class extends ST.Event {
    constructor() {
        super("crew_accident", [1, 1], ST.EFFECT.crew_accident);
        this.pay = ST.Utils.roll(10, 20);
    }
    canTrigger() { return ST.crew.current > 0; }
    execute() {
        ST.crew.current -= 1;
        ST.money -= this.pay;
    }
    getActivateMessage() {
        return ST.getMsg(ST.Msg['event_' + this.code + "_act"], [this.pay]);    
    }
}

ST.Events.decontamination = class extends ST.Event {
    constructor() {
        super("decontamination", [18, 30], ST.EFFECT.decontamination);
        this.pay = ST.Utils.roll(4, 10);
    }
    getEffectMsg() {
        return ST.getMsg(ST.Msg.effect_decontamination, [this.delay]);
    }    
}

ST.Events.high_traffic = class extends ST.Event {
    constructor() {
        super("high_traffic", [12, 20], ST.EFFECT.high_traffic);
        this.pay = ST.Utils.roll(4, 10);
    }
    getEffectMsg() {
        return ST.getMsg(ST.Msg['effect_' + this.effect], [this.delay]);
    }    
}

ST.Events.local_gang = class extends ST.Event {
    constructor() {
        super("local_gang", [1, 1], ST.EFFECT.local_gang);
    }
    execute() {
        var amount = 15 + ST.Utils.roll(1, 3) * 5;
        ST.money -= amount;
        ST.addToLogbook(ST.Msg.effect_local_gang, [amount]);
    };
}

ST.Events.civil_strike = class extends ST.Event {
    constructor() {
        super("civil_strike", [12, 36], ST.EFFECT.civil_strike);
    }
}

ST.Events.labor_union_strike = class extends ST.Event {
    constructor() {
        super("labor_union_strike", [6, 18], ST.EFFECT.labor_union_strike);
    }
    getDesc() {
        return ST.getMsg(ST.Msg['event_' + this.code + "_desc"], [this.duration]);
    };
}

ST.Events.broken_port_gear = class extends ST.Event {
    constructor() {
        super("broken_port_gear", [12, 24], ST.EFFECT.broken_port_gear);
    }
}

ST.Events.technical_inspection = class extends ST.Event {
    constructor() {
        super("technical_inspection", [1, 1], ST.EFFECT.technical_inspection);
    }
    execute() {
        var brokenPartsNum = 0;
        brokenPartsNum += ST.engine.max - ST.engine.current;
        brokenPartsNum += ST.hull.max - ST.hull.current;
        brokenPartsNum += ST.cargogear.max - ST.cargogear.current;
    
        var pay = ST.BROKEN_PART_BASEFINE + brokenPartsNum * ST.BROKEN_PART_FINE;
    
        if (brokenPartsNum == 0) {
            ST.addToLogbook(ST.Msg.event_technical_inspection_ok);
        }
        else if (ST.Utils.roll(1, 6) <= ST.crew.current) {
            ST.addToLogbook(ST.Msg.event_technical_inspection_crew);
        }
        else {
            ST.addToLogbook(ST.Msg.event_technical_inspection_fine, [pay]);
            ST.money -= pay;
        }
    }
}

ST.Events.express_job = class extends ST.Event {
    constructor() {
        super("express_job", [1, 1], ST.EFFECT.express_job);
    }
    canTrigger() { return ST.JobManager.hasJob(); }
    execute() {
        var index = ST.Utils.roll(0, ST.JobManager.jobs.length - 1);
        ST.JobManager.jobs[index].payment = Math.floor(ST.JobManager.jobs[index].payment * ST.EXPRESS_JOB_MULTIPLIER);
        ST.addToLogbook(ST.Msg.effect_express_job, [ST.JobManager.jobs[index].destination.name]);
    }
}

ST.Events.thieves = class extends ST.Event {
    constructor() {
        super("thieves", [1, 1], ST.EFFECT.thieves);
    }
    execute() {
        if (ST.Utils.roll(1, 6) <= ST.crew.current) {
            ST.addToLogbook(ST.Msg.effect_thieves_no_steal);
            return;
        }
        let steal = [];
        let d = ST.Utils.roll(1, 4);
        switch(d) {
            case 1:
                steal.push('money', 'engine');
                break;
            case 2:
                steal.push('sparepart', 'basemoney', 'engine');
                break;
            case 3:
                steal.push('fuel', 'basemoney', 'engine');
                break;
            case 4:
                steal.push('engine');
                break;
        }
    
        let stealBaseMoney = function() {
            let amount = ST.THIEVES_BASE_CREDIT;
            if (ST.money < amount) amount = ST.money;
            if (amount == 0) return false;
            ST.money -= amount;
            ST.addToLogbook(ST.Msg.effect_thieves_steal_money, [amount]);
            return true;
        };
        let stealMoney = function() {
            let d = ST.Utils.roll(1, 6);
            let amount = ST.THIEVES_BASE_CREDIT;
            if (d > 4) { amount *= 2; }
            else if (d > 1) { amount = Math.floor(amount * 1.5); }
            if (ST.money < amount) amount = ST.money;
            if (amount == 0) return false;
            ST.money -= amount;
            ST.addToLogbook(ST.Msg.effect_thieves_steal_money, [amount]);
            return true;
        };
        let stealSparepart = function() {
            let amount = ST.Utils.roll(1, 3);
            if (ST.spareparts.current < amount) amount = ST.spareparts.current;
            if (amount == 0) return false;
    
            ST.spareparts.current -= amount;
            ST.addToLogbook(ST.Msg.effect_thieves_steal_sparepart, [amount]);
            return true;
        };
        let stealFuel = function() {
            let amount = ST.Utils.roll(5, 15);
            if (ST.fuel.current < amount) amount = ST.fuel.current;
            if (amount == 0) return false;
    
            ST.fuel.current -= amount;
            ST.addToLogbook(ST.Msg.effect_thieves_steal_fuel, [amount]);
            return true;
        };
        let stealEngine = function() {
            ST.engine.current -= 1;
            ST.addToLogbook(ST.Msg.effect_thieves_steal_engine);
            return true;
        };
    
        for(let i = 0; i < steal.length; i++) {
            let canSteal = true;
            if (steal[i] == "money") canSteal = stealMoney();
            else if (steal[i] == "sparepart") canSteal = stealSparepart();
            else if (steal[i] == "basemoney") canSteal = stealBaseMoney();
            else if (steal[i] == "fuel") canSteal = stealFuel();
            else canSteal = stealEngine();
    
            if (canSteal) break;
        }
    }
}

ST.Events.wild_party = class extends ST.Event {
    constructor() {
        super("wild_party", [1, 1], ST.EFFECT.wild_party);
    }
    canTrigger() { return ST.crew.current > 0; }
}

ST.Events.contraband = class extends ST.Event {
    constructor() {
        super("contraband", [1, 1], ST.EFFECT.contraband);
    }
    canTrigger() {
        if (ST.Utils.roll(1, 6) <= ST.crew.current) {
            ST.addToLogbook(ST.Msg.event_contraband_crew_success);
            return false;
        }
        return true;
    }
}

ST.Events.stowaway = class extends ST.Event {
    constructor() {
        super("stowaway", [1, 1], ST.EFFECT.stowaway);
    }
    execute() {
        if (ST.Utils.roll(1, 6) <= ST.crew.current) {
            ST.addToLogbook(ST.Msg.event_stowaway_crew_success);
        }
        else {
            let fine = 5 + ST.Utils.roll(1, 3) * 5;
            ST.money -= fine;
            ST.addToLogbook(ST.Msg.event_stowaway_crew_failed, [fine]);
        }
    }
}

ST.Events.engine_malfunction = class extends ST.Event {
    constructor() {
        super("engine_malfunction", [1, 1], ST.EFFECT.engine_malfunction);
    }
    execute() {
        ST.engine.current -= 1;
        ST.addToLogbook(ST.Msg.event_engine_malfunction);
    }
}

ST.Events.solar_flare = class extends ST.Event {
    constructor() {
        super("solar_flare", [24, 48], ST.EFFECT.solar_flare);
    }
}

ST.Events.quarantine = class extends ST.Event {
    constructor() {
        super("quarantine", [12, 36], ST.EFFECT.quarantine);
    }
    execute() { ST.CrewFind.available = 0; }
    hasInfection() {
        if (ST.crew.current > 0 && ST.Utils.roll(1, 6) > 4) {
            ST.crew.current -= 1;
            return true;
        }
        return false;
    }
}

ST.Events.meteor_impact = class extends ST.Event {
    constructor() {
        super("meteor_impact", [24, 48], ST.EFFECT.meteor_impact);
    }
}

ST.Events.orbital_accident = class extends ST.Event {
    constructor() {
        super("orbital_accident", [1, 1], ST.EFFECT.orbital_accident);
    }
    execute() {
        ST.currentLocation.effects.push(ST.EFFECT.orbital_trash);
        ST.EffectManager.addEffect(ST.EFFECT.orbital_trash);
    }
}

ST.Events.urgent_harvest = class extends ST.Event {
    constructor() {
        super("urgent_harvest", [24, 48], ST.EFFECT.urgent_harvest);
    }
}

ST.Events.lost_package = class extends ST.Event {
    constructor() {
        super("lost_package", [1, 1], ST.EFFECT.lost_package);
    }
    canTrigger() {
        return ST.souvenirs.getSum() < ST.SOUVENIR_CAPACITY;
    }
    execute() {
        let s = ST.SouvenirsManager.getRandomSouvenir();
        ST.souvenirs.add(s);
        ST.addToLogbook(ST.Msg.event_lost_package, [s.name]);
    }
}

ST.Events.meteor_swarm = class extends ST.Event {
    constructor() {
        super("meteor_swarm", [24, 48], ST.EFFECT.meteor_swarm);
    }
    getDesc() {
        return ST.getMsg(ST.Msg.event_meteor_swarm_desc, [this.getRemaining(ST.turn)]);
    }
}

ST.Events.governor_day = class extends ST.Event {
    constructor() {
        super("governor_day", [24, 24], ST.EFFECT.governor_day);
    }
    getDesc() {
        return ST.getMsg(ST.Msg.event_governor_day_desc, [ST.GOVERNOR_DAY_BONUS_PRICE]);
    }
}

ST.Events.enviroment_prot_tax = class extends ST.Event {
    constructor() {
        super("enviroment_prot_tax", [1, 1], ST.EFFECT.enviroment_prot_tax);
    }
    execute() {
        ST.currentLocation.effects.push(ST.EFFECT.enviroment_protection_tax);
        ST.EffectManager.addEffect(ST.EFFECT.enviroment_protection_tax);
    }
}

ST.Events.gambling = class extends ST.Event {
    constructor() {
        super("gambling", [1, 1], ST.EFFECT.gambling);
    }
    execute() {
        ST.money += ST.GAMBLING_PRIZE;
    }
    getActivateMessage() {
        return ST.getMsg(ST.Msg['event_' + this.code + "_act"], [ST.GAMBLING_PRIZE]);
    }
}

ST.Events.fuel_stealing = class extends ST.Event {
    constructor() {
        super("fuel_stealing", [1, 1], ST.EFFECT.fuel_stealing);
    }
    canTrigger() {
        return ST.crew.current > 0 && ST.fuel.current >= ST.FUEL_STEALING;
    }
    execute() {
        ST.crew.current -= 1;
        ST.fuel.current -= ST.FUEL_STEALING;
        ST.addToLogbook(ST.Msg.event_fuel_stealing, [ST.FUEL_STEALING]);
    }
}

ST.Events.wreck_traction = class extends ST.Event {
    constructor() {
        super("wreck_traction", [1, 10], ST.EFFECT.wreck_traction);
    }
    canTrigger = function() {
        return ST.fuel.current >= 10;
    }
}

ST.Events.advertisement = class extends ST.Event {
    constructor() {
        super("advertisement", [1, 1], ST.EFFECT.advertisement);
    }
}
