ST.Travel = {
    starterLocation: null,
    destination: null,
    distance: 0,
    duration: 0,
    departueTime: 0,
    speedGrade: 0,
    overdrive: 0,
    speed: 0,
    ftlFuel: 0,
    maneuverFuel: 0,
    hasDestination: function() { return this.destination != null; },
    setDestination: function(location) {
        this.starterLocation = ST.currentLocation;
        this.destination = location;

        this.calculateTravelDatas();
    },
    calculateTravelDatas: function() {
        if (this.destination == null) return;

        this.distance = ST.getDistance(this.starterLocation, this.destination);

        this.speedGrade = ST.currentSpeed;
        this.overdrive = 0;
        if (this.speedGrade > ST.engine.getMaxSpeedGrade()) {
            this.overdrive = this.speedGrade - ST.engine.getMaxSpeedGrade();
        }

        this.speed = ST.GameTables.speedToSpeed[this.speedGrade];
        this.duration = this.distance * this.speed;

        let fuelConsume = ST.GameTables.speedToFuel[this.speedGrade];
        this.ftlFuel = (Math.floor(this.distance / ST.GameTables.fuelConsumeUnit) + 1) * fuelConsume;
        if (this.overdrive > 0) {
            this.ftlFuel += ST.GameTables.overdriveFuelPlus;
        }

        this.maneuverFuel = ST.GameTables.maneuverFuel;
        if (ST.EffectManager.hasEffect(ST.EFFECT.LARGE_GRAVITY)) {
            this.maneuverFuel += 1;
        }
        if (ST.EffectManager.hasEffect(ST.EFFECT.storm_1)) {
            this.maneuverFuel += 1;
        }
        if (ST.EffectManager.hasEffect(ST.EFFECT.meteor_impact)) {
            this.maneuverFuel += 2;
        }
        if (ST.EffectManager.hasEffect(ST.EFFECT.orbital_trash)) {
            this.maneuverFuel += 5;
        }
        if (ST.EffectManager.hasEffect(ST.EFFECT.meteor_swarm)) {
            this.maneuverFuel += 1;
        }

    },
    clear: function() {
        this.destination = null;
    },
    getRequiredTime: function() {
        return this.duration;
    },

    travel: function() {
        let currentCoord = ST.currentLocation.coord;
        ST.Travel.departueTime = ST.turn;
        ST.fuel.current -= (ST.Travel.ftlFuel + ST.Travel.maneuverFuel);
        //  regi
        // ST.GameWorld.setLocation(null);
        ST.setLocation(null);

        ST.position = ST.POSITION.Space;

        ST.ActionManager.set(ST.ACTION_TRAVEL, ST.Travel.getRequiredTime());

        if (ST.EffectManager.hasEffect(ST.EFFECT.storm_3)) {
            ST.hull.current -= 1;
            ST.addToLogbook(ST.Msg.effect_storm_3);
        }

        if (ST.EffectManager.hasEffect(ST.EFFECT.solar_flare)) {
            if (ST.engine.current != ST.SYSTEM_MAX_UPGARDE) {
                ST.Travel.destination = ST.getRandomLocation([ST.currentLocation], true);
                ST.addToLogbook(ST.Msg.event_solar_flare);
                return;
            }
        }

        if (ST.Travel.overdrive > 0) {
            ST.engine.current -= (ST.Travel.overdrive + 1);
            //ST.addToLogbook(ST.Msg.travel_overdrive);
            let delay = ST.Utils.roll(1, ST.ActionManager.getDuration() - 1);
            ST.addDelayedMessage(delay, ST.getMsg(ST.Msg.travel_overdrive, [(ST.Travel.overdrive + 1)]));

        }
        else if (ST.Utils.roll(1, 6) > ST.crew.current && ST.Utils.roll(1, 6) > ST.engine.current) {
            ST.engine.current -= 1;
            let delay = ST.Utils.roll(1, ST.ActionManager.getDuration() - 1);
            ST.addDelayedMessage(delay, ST.getMsg(ST.Msg.travel_damage_engine));
        }


        if (ST.engine.current == 0) {
            //  cel elotti deep space lesz a vegallomas
            ST.ActionManager.setDuration(ST.Travel.getRequiredTime() - 1);
            let dif = ST.Travel.starterLocation.coord - ST.Travel.destination.coord;
            let coord = 0;
            if (dif > 0) {
                //  visszafele
                coord = ST.Travel.destination.coord + 1;
            }
            else {
                //  elore
                coord = ST.Travel.destination.coord - 1;
            }
            ST.Travel.destination = ST.getLocationOnCoord(coord);
        }

        ST.statistic.distance += Math.abs(currentCoord - ST.Travel.destination.coord);
        
        if (ST.EffectManager.hasEffect(ST.EFFECT.high_traffic)) {
            ST.ActionManager.duration += ST.currentEvent.delay;
            ST.Logbook.addNote(ST.currentEvent.getEffectMsg());
        }

        if (ST.EffectManager.hasEffect(ST.EFFECT.meteor_swarm)) {
            if (ST.Utils.roll(1, 6) == 6) {
                ST.hull.current -= 1;
                ST.addToLogbook(ST.Msg.event_meteor_swarm_hull);
            }
        }

        if (ST.EffectManager.hasEffect(ST.EFFECT.high_traffic)) {
            ST.addDelayedMessage(ST.currentEvent.delay, ST.getMsg(ST.Msg.action_travel, [ST.ActionManager.duration]));
        }
        else {
            ST.addToLogbook(ST.Msg.action_travel, [ST.ActionManager.duration]);
        }

        ST.removeEvent();
        ST.Scheduler.add(function() { ST.Travel.arrive(); }, ST.ActionManager.duration);
    },

    arrive: function() {
        console.log("arrive event");

        ST.addToLogbook(ST.Msg.travel_arrive);
        
        if (ST.Travel.destination.isDeepspace()) {
            ST.setLocation(ST.Travel.destination);
            ST.Travel.clear();
            return;
        }

        ST.position = ST.POSITION.Port;
        ST.setLocation(ST.Travel.destination);
        ST.updateLocation();

        ST.PassengerTransport.shiparrive();

        if (ST.EffectManager.hasEffect(ST.EFFECT.ACID_ATMOSPHERE)) {
            ST.hull.current -= 1;
            ST.addToLogbook(ST.Msg.effect_acid_atmospher);
        }
        if (ST.EffectManager.hasEffect(ST.EFFECT.ASTEROID_FIELD))
        {
            ST.hull.current -= 1;
            ST.addToLogbook(ST.Msg.effect_asteroid_field);
        }

        ST.Travel.clear();

    },


    /**
     * nem a szokasos utazas, hanem a jatek utaztatja
     * indulo/travel effectek nincsennek
     * fix fuel vonodik le
     * arrive effect van
     */
    forceTravel: function(location) {
        ST.fuel.current -= 2;
        ST.Travel.destination = location;
        if (location.isDeepspace()) ST.position = ST.POSITION.Space;
        else ST.position = ST.POSITION.Port;
        ST.Travel.arrive();
    }
};