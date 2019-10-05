ST.Job = function(destination, cargo, size, payment) {
    this.destination = destination;
    this.cargo = cargo;
    this.size = size;
    this.payment = payment;
};

ST.JobManager = {
    jobs: [],
    update: function() {
        this.jobs = [];
        var cargosAvailable = ST.GameTables.cargoAvailable[ST.currentLocation.population][ST.Utils.roll(0, 5)];
        var destination, cargo, distance, payment;
        var loc = ST.currentLocation;
        //  half
        for(var i = 0; i < cargosAvailable[0]; i++) {
            var cargoCode = ST.Utils.getRandomArrayElement(loc.cargos);
            cargo = ST.getCargoByCode(cargoCode);
            var destCode = ST.Utils.getRandomArrayElement(loc.cargoDest[cargoCode]);
            destination = ST.getLocationByCode(destCode);
            distance = ST.getDistance(ST.currentLocation, destination);
            payment = Math.floor( (cargo.baseValue + cargo.distBonus * distance) / 2);
            this.jobs.push(new ST.Job(destination, cargo, 1, payment));
        }
        //  full
        for(var i = 0; i < cargosAvailable[1]; i++) {
            var cargoCode = ST.Utils.getRandomArrayElement(loc.cargos);
            cargo = ST.getCargoByCode(cargoCode);
            var destCode = ST.Utils.getRandomArrayElement(loc.cargoDest[cargoCode]);
            destination = ST.getLocationByCode(destCode);
            distance = ST.getDistance(ST.currentLocation, destination);
            payment = cargo.baseValue + cargo.distBonus * distance;
            this.jobs.push(new ST.Job(destination, cargo, 2, payment));
        }
    },

    hasJob: function() {
        return this.jobs.length > 0;
    },

    /**
     * @param {ST.Job} job
     */
    addJob: function(job) {
        ST.jobs.add(job);
        var index = this.jobs.indexOf(job);
        this.jobs.splice(index, 1);
        ST.ActionManager.set(ST.ACTION_CARGO_LOAD, this.getLoadTime());

        if (ST.EffectManager.hasEffect(ST.EFFECT.quarantine)) {
            if (ST.GameWorld.event.hasInfection()) {
                ST.addToLogbook(ST.Msg.event_quarantine_infection);
            }
        }

        ST.addToLogbook(ST.Msg.action_cargo_load, [ST.ActionManager.getDuration()]);

        if ( !ST.hasLocationCargoGear()) {
            if (ST.Utils.roll(1, 6) > ST.cargogear.current) {
                ST.cargogear.current -= 1;
                ST.addToLogbook(ST.Msg.broke_ship_cargo_gear);
            }
        }

        if (ST.EffectManager.hasEffect(ST.EFFECT.governor_day)) {
            ST.money -= ST.GOVERNOR_DAY_BONUS_PRICE;
            ST.addToLogbook(ST.Msg.event_governor_day_bonus_price, [ST.GOVERNOR_DAY_BONUS_PRICE]);
        }
    },
    getLoadTime: function() {
        var time = ST.GameTables.actionTime[ST.ACTION_CARGO_LOAD];
        if (ST.EffectManager.hasEffect(ST.EFFECT.computer_virus)) {
            time += ST.COMPUTER_VIRUS_TIME_LATE;
        }
        return time;
    },

    completeJob: function(job) {
        console.log('Job finished, payment: ' + job.payment);
        ST.money += job.payment;
        ST.jobs.remove(job);
        ST.ActionManager.set(ST.ACTION_CARGO_UNLOAD, this.getUnloadTime());

        if (ST.EffectManager.hasEffect(ST.EFFECT.quarantine)) {
            if (ST.GameWorld.event.hasInfection()) {
                ST.addToLogbook(ST.Msg.event_quarantine_infection);
            }
        }

        ST.addToLogbook(ST.Msg.action_cargo_unload, [this.getUnloadTime()]);

        if ( !ST.hasLocationCargoGear()) {
            if (ST.Utils.roll(1, 6) > ST.cargogear.current) {
                ST.cargogear.current -= 1;
                ST.addToLogbook(ST.Msg.broke_ship_cargo_gear);
            }
        }

        if (ST.EffectManager.hasEffect(ST.EFFECT.decontamination)) {
            //ST.Logbook.addNote(ST.GameWorld.getEffectMsg());
            ST.addDelayedMessage(ST.ActionManager.duration, ST.GameWorld.getEffectMsg());
            ST.ActionManager.duration += ST.GameWorld.event.delay;
        }

        if (ST.EffectManager.hasEffect(ST.EFFECT.governor_day)) {
            ST.money -= ST.GOVERNOR_DAY_BONUS_PRICE;
            ST.addToLogbook(ST.Msg.event_governor_day_bonus_price, [ST.GOVERNOR_DAY_BONUS_PRICE]);
        }
    },
    getUnloadTime: function() {
        var time = ST.GameTables.actionTime[ST.ACTION_CARGO_UNLOAD];
        if (ST.EffectManager.hasEffect(ST.EFFECT.computer_virus)) {
            time += ST.COMPUTER_VIRUS_TIME_LATE;
        }
        return time;
    }
};