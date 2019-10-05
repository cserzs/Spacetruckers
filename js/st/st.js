let ST = {
    SYSTEM_MAX_UPGARDE: 5,
    CREW_CAPACITY: 5,
    SOUVENIR_CAPACITY: 6,
    FUEL_CAPACITY: 100,
    COMPUTER_VIRUS_TIME_LATE: 6,
    //  rossz modul utan fizetendo alap es modulonkenti birsag
    BROKEN_PART_BASEFINE: 50,
    BROKEN_PART_FINE: 30,
    EXPRESS_JOB_MULTIPLIER: 1.6,
    THIEVES_BASE_CREDIT: 30,
    WILD_PARTY_FINE: 35,
    GOVERNOR_DAY_BONUS_PRICE: 50,
    GAMBLING_PRIZE: 100,
    FUEL_STEALING: 15,
    ENVIROMENT_PROTECTION_TAX: 25,
    ADVERTISEMENT_PRIZE: 10,

    PassengerPricePerDistance: 2,

    DEEPSPACE: 'deepspace',

    LOCATION: {
        Freeport: 'freeport',
        NewHongkong: 'new_hongkong',
        Aberdeen: 'aberdeen',
        Lucinda: 'lucinda',
        Daiton: 'daiton',
        Eliott: 'eliott',
        Khurtau: 'khurtau',
        Galbena: 'galbena',
        Hamaret: 'hamaret',
        LiannJun: 'liann_jun',
        Silverhold: 'silverhold'
    },

    POSITION: {
        Space: 1,
        Port: 2
    },

    LOCATION_TYPE_SPACE: 0,
    LOCATION_TYPE_PLANET: 1,

    PlanetType: {
        CORE: 0,
        AGRI: 1,
        INDUSTRIAL: 2,
        MINE: 3,
        ALIEN: 4,
    },
    PLANET_TYPE_CORE: 0,
    PLANET_TYPE_AGRI: 1,
    PLANET_TYPE_INDUSTRIAL: 2,
    PLANET_TYPE_MINE: 3,
    PLANET_TYPE_ALIEN: 4,

    ACTION_ANY: 'any',
    ACTION_CREW_REPAIR: 'crew_repair',
    ACTION_CARGO_UNLOAD: 'cargo_unload',
    ACTION_CARGO_LOAD: 'cargo_load',
    ACTION_PORT_REPAIR: 'port_repair',
    ACTION_PORT_UPGRADE: 'port_upgrade',
    ACTION_TRAVEL: 'travel',
    ACTION_WAIT: 'wait',
    ACTION_CREW_HIRE: 'crew_hire',
    ACTION_WRECK_TRACTION: 'wreck_traction',

    GAMEWINDOW: {
        none: 'none',
        start: 'start',
        map: 'map',
        location: 'location',
        spaceport: 'spaceport',
        deepspace: 'deepspace',
        ship: 'ship',
        log: 'log'
    },

    SOUVENIR: {
        exclusice_wine: 'exclusive_wine',
        jewelry: 'jewelry',
        antique_items: 'antique_items',
        coins: 'coins',
        perfume: 'perfume',
        exotic_spice: 'exotic_spice',
    },

    EFFECT: {
        //  allando jellemzok
        NO_PORT_GEAR: 'no_port_gear',
        CHEAPER_PORT_REPAIR: 'cheaper_port_repair',
        ALWAYS_SPAREPART: 'always_sparepart',
        NO_SPAREPART: 'no_sparepart',
        CONST_SPAREPART_PRICE: 'const_sparepart_price',
        LAZY_MECHANIC: 'lazy_mechanic',
        LABOR_SHORTAGE: 'labor_shortage',
        LARGE_GRAVITY: 'large_gravity',
        ACID_ATMOSPHERE: 'acid_atmosphere',
        ASTEROID_FIELD: 'asteroid_field',
        PRISON_PLANET: 'prison_planet', //  nincs crew hire
        TOURIST_PARADISE: 'tourist_paradise',   //  draga szuvenir
        orbital_trash: 'orbital_trash',
        enviroment_protection_tax: 'enviroment_protection_tax',

        //NO_PORT_REPAIR: 'no_port_repair', => strike

        //NO_PASSENGERS: 'no_passangers',

        PORT_GEAR_BROKEN: 'port_gear_broken',    //  =>  ??????

        //  events
        storm_1: 'storm_1',
        storm_2: 'storm_2',
        storm_3: 'storm_3',
        computer_virus: 'computer_virus',
        corrupt_port_boss: 'corrupt_port_boss',
        hard_worker_sailor: 'hard_worker_sailor',
        crew_accident: 'crew_accident',
        decontamination: 'decontamination',
        high_traffic: 'high_traffic',
        local_gang: 'local_gang',
        civil_strike: 'civil_strike',
        labor_union_strike: 'labor_union_strike',
        broken_port_gear: 'broken_port_gear',
        technical_inspection: 'technical_inspection',
        express_job: 'express_job',
        thieves: 'thieves',
        wild_party: 'wild_party',
        contraband: 'contraband',
        stowaway: 'stowaway',
        engine_malfunction: 'engine_malfunction',
        solar_flare: 'solar_flare',
        quarantine: 'quarantine',
        meteor_impact: 'meteor_impact',
        orbital_accident: 'orbital_accident',
        urgent_harvest: 'urgent_harvest',
        lost_package: 'lost_package',
        meteor_swarm: 'meteor_swarm',
        governor_day: 'governor_day',
        enviroment_prot_tax: 'enviroment_prot_tax',
        gambling: 'gambling',
        fuel_stealing: 'fuel_stealing',
        wreck_traction: 'wreck_traction',
        advertisement: 'advertisement'
    },

    CARGO: {
        Food: 'food',
        GourmetFood: 'gourmet_food',
        ProcessedOre: 'processed_ore',
        PreciousMetals: 'precious_metals',
        CrystalsGems: 'crystals_gems',
        Machinery: 'machinery',
        Vehicles: 'vehicles',
        Tools: 'tools',
        Parts: 'parts',
        Electronics: 'electronics',
        Medicine: 'medicine',
        AdvMachinery: 'adv_machinery',
        AdvTools: 'adv_tools',
        AdvParts: 'adv_parts',
        AdvVehicles: 'adv_vehicles',
        Chemicals: 'chemicals',
        Fuel: 'fuel',
        Gas: 'gas',
        Fertilizer: 'fertilizer',
        Seed: 'seed',
        Trash: 'trash'
    },

    STATE: {
        No_game: 'no_game',
        Running: 'running',
        Win: 'win',
        Lose: 'lose'
    },

    endReason: {
        no_money: "no_money",
        no_engine: "no_engine",
        no_hull: "no_hull",
        no_fuel: "no_fuel",
        stucked_space_no_engine: "stucked_space_no_engine",
        stucked_space_no_hull: "stucked_space_no_hull",
        times_up: "times_up",
        times_up_no_money: "times_up_no_money",
        repay_success: "repay_success",
        repay_failed: "repay_failed"
    },

    state: 'no_game',

    turn: 0,
    day: 1,
    hour: 0,
    gameDate: null,

    timeLimit: 50,
    loanAmount: 1200,

    money: 500,
    position: 1,
    currentSpeed: 1,
    lastLocation: null,
    currentLocation: null,
    waitTime: 1,
    isPlayerActive: true,

    eventList: [],
    discardedEvents: [],
    currentEvent: null,
    nextEventTurn: -1,

    statistic: {
        point: 0,
        endReason: 0,
        distance: 0
    },

    engine: {
        id: 'engine',
        current: 3,
        max: 3,
        getMaxSpeedGrade: function() { return ST.GameTables.engineToSpeed[this.current]; }
    },
    hull: {
        id: 'hull',
        current: 1,
        max: 3
    },
    cargogear: {
        id: 'cargogear',
        current: 3,
        max: 3
    },
    spareparts: {
        current: 1,
        max: 3
    },
    fuel: {
        current: 70,
        max: 100
    },
    crew: {
        current: 2,
        max: 5
    },


    passengers: {
        groups: [],
        capacity: 6,
        init: function() { this.groups = []; },
        hasPassengers: function() { return this.groups.length > 0; },
        add:function(group, num) {
            let g = this.getGroup(group);
            if (g == null) {
                this.groups.push(new ST.PassengerGroup(group.startLocation, group.destination, num, group.departureTurn));
            }
            else {
                g.num += num;
            }
        },
        remove: function(group) {
            let index = this.groups.indexOf(group);
            if (index > -1) { this.groups.splice(index, 1); }
        },
        getSum: function() {
            let sum = 0;
            for(let i = 0; i < this.groups.length; i++) { sum += this.groups[i].num; }
            return sum;
        },
        getFreeCapacity: function() { return this.capacity - this.getSum(); },
        getGroup: function(group) {
            for(let i = 0; i < this.groups.length; i++) {
                if (this.groups[i].startLocation.id == group.startLocation.id &&
                    this.groups[i].destination.id == group.destination.id &&
                    this.groups[i].departureTurn == group.departureTurn) return this.groups[i];
            }
            return null;
        },
        getGroupTo: function(location) {
            for(let i = 0; i < this.groups.length; i++) {
                if (this.groups[i].destination.id == location.id) return this.groups[i];
            }
            return null;
        }
    },

    jobs: {
        list: [],
        capacity: 2,
        init: function() { this.list = []; },
        getSum: function() {
            let sum = 0;
            if (this.list.length > 0) {
                for(let i = 0; i < this.list.length; i++) sum += this.list[i].size;
            }
            return sum;
        },
        getFreeCapacity: function() {
            return this.capacity - this.getSum();
        },
        hasJob: function() { return this.getSum() > 0; },
        add: function(job) { this.list.push(job); },
        remove: function(job) {
            let index = this.list.indexOf(job);
            if (index > -1) this.list.splice(index, 1);
        }
    },

    souvenirs: {
        list: [],
        init: function() {
            this.list = [];
        },
        getAll: function() { return this.list; },
        get: function(souvenir) {
            for(let i = 0; i < this.list.length; i++) {
                if (this.list[i].id == souvenir.id) return this.list[i];
            }
            return null;
        },
        getSum: function() {
            let sum = 0;
            for(let i = 0; i < this.list.length; i++) sum += this.list[i].num;
            return sum;
        },
        add: function(souvenir) {
            let s = this.get(souvenir);
            if (s == null) {
                s = new ST.Souvenir(souvenir.id, souvenir.priceRange, souvenir.name);
                s.price = souvenir.price;
                s.num = 0;
                this.list.push(s);
            }
            else {
                if (souvenir.price < s.price) s.price = souvenir.price;
            }
            s.num += 1;
        },
        remove: function(souvenir, num) {
            num = num || 1;
            let s = this.get(souvenir);
            if (s == null) return;
            s.num -= num;
            if (s.num < 1) {
                let index = this.list.indexOf(s);
                this.list.splice(index, 1);
            }
        }
    },

    locations: [],

    init: function() {
        ST.state = ST.STATE.Running;
        ST.turn = 1;
        ST.day = 0;
        ST.hour = 0;
        ST.money = 500;

        ST.gameDate = new Date('2231-07-24 00:00:00');

        ST.timeLimit = 50;
        ST.loanAmount = 2000;

        ST.fuel.current = 70;
        ST.engine.current = 3;
        ST.engine.max = 3;
        ST.hull.current = 3;
        ST.hull.max = 3;
        ST.cargogear.current = 3;
        ST.cargogear.max = 3;

        ST.spareparts.current = 3;
        ST.crew.current = 3;

        ST.statistic.point = 0;
        ST.statistic.distance = 0;

        ST.currentSpeed = 1;
        ST.position = ST.POSITION.Port;
        ST.currentLocation = null;
        ST.lastLocation = null;

        ST.isPlayerActive = true;

        ST.passengers.init();
        ST.jobs.init();
        ST.souvenirs.init();

        ST.locations = [];
        let coord = 0;
        for(let i = 0; i < ST.GameTables.locations.length; i++) {
            let loc = new ST.Location(ST.GameTables.locations[i]);
            loc.coord = coord;
            for(let p = 0; p < ST.GameTables.locations[i].cargos.length; p++) {
                let temp = ST.GameTables.locations[i].cargos[p];
                for(let k = 0; k < temp[1]; k++) {
                    loc.cargos.push(temp[0]);
                }
            }
            ST.locations.push(loc);
            coord += 2;
        }

        //  helyszineket osszekeverni
        let locNum = ST.locations.length - 1;
        for(let i = 0; i < 20; i++) {
            let k = ST.Utils.roll(0, locNum);
            let n = ST.Utils.roll(0, locNum);

            let t = ST.locations[k].coord;
            ST.locations[k].coord = ST.locations[n].coord;
            ST.locations[n].coord = t;

            t = ST.locations[k];
            ST.locations[k] = ST.locations[n];
            ST.locations[n] = t;
        }

        //  betoldani 10 ures helyet
        let remainingPlace = 10;
        let maxCoord = 19;
        for(let i = 0; i < remainingPlace; i++) {
            let n = ST.Utils.roll(0, maxCoord);
            for(let k = 0; k < ST.locations.length; k++) {
                if (ST.locations[k].coord > n) ST.locations[k].coord += 1;
            }
            maxCoord += 1;
        }

        //  eliott 10-es tavon belul legyen
        let eliott = ST.getLocationByCode("eliott");
        if (eliott.coord > 10) {
            let p = ST.locations.filter(function(current, index) {
                return current.coord <= 10;
            });
            let newLoc = ST.Utils.getRandomArrayElement(p);
            ST.Utils.changeLocations(ST.locations, eliott, newLoc);
        }

        //  new hongkong kb kozepen legyen
        let hongkong = ST.getLocationByCode("new_hongkong");
        if (Math.abs(hongkong.coord - 15) > 5) {
            let p = ST.locations.filter(function(current, index) {
                return current.coord > 10 && current.coord <= 15;
            });
            if (p.length > 0) {
                let newLoc = ST.Utils.getRandomArrayElement(p);
                ST.Utils.changeLocations(ST.locations, hongkong, newLoc);
            }
        }

        let map = [];
        let locOn = function(coord) {
            for(let i = 0; i < ST.locations.length; i++) {
                if (ST.locations[i].coord == coord) return ST.locations[i];
            }
            return null;
        };
        for(let i = 0; i < 35; i++) {
            let loc = locOn(i);
            if (loc == null) {
                loc = new ST.Location(ST.GameTables.deepspace);
                loc.coord = i;
            }
            map.push(loc);
        }
        ST.locations = map;

        ST.EffectManager.init();
        ST.SouvenirsManager.init();
        ST.AdvertisementEvent.init();

        ST.eventList = [];
        ST.discardedEvents = [];
        ST.currentEvent = null;
        ST.nextEventTurn = 0;

        for(let i = 0; i < ST.GameTables.eventsOnce.length; i++) ST.eventList.push(ST.GameTables.eventsOnce[i]);
        for(let i = 0; i < ST.GameTables.eventsTwice.length; i++) {
            ST.eventList.push(ST.GameTables.eventsTwice[i]);
            ST.eventList.push(ST.GameTables.eventsTwice[i]);
        }
        ST.eventList = ST.Utils.shuffleArray(ST.eventList);
        ST.eventList = ST.Utils.shuffleArray(ST.eventList);
        ST.nextEventTurn = ST.Utils.roll(10, 20);
        console.log("next event: " + ST.nextEventTurn);

        ST.setLocation(ST.getLocationByCode(ST.LOCATION.NewHongkong));
        ST.updateLocation();
    
        ST.updateGameTime(ST.turn);

        ST.Scheduler.init();
        ST.Scheduler.add(function() { ST.newDay(); }, 24);
    },

    setDebugData: function() {
        ST.engine.current = 2;
        ST.spareparts.current = 3;

        ST.nextEventTurn = ST.Utils.roll(2, 10);

        // this.timeLimit = 5;
        // this.money = 1500;

        // this.engine.current = -1;
    },

    hasActiveGame: function() { return ST.state == ST.STATE.Running; },

    getSouvenirCapacity: function() { return ST.GameTables.souvenirCapacity; },

    getLocation: function(id) {
        for(let i = 0; i < this.locations.length; i++) {
            if (this.locations[i].id == id) return this.locations[i];
        }
    },

    getLocationByCode: function(code) {
        for(let i = 0; i < this.locations.length; i++) {
            if (this.locations[i].code == code) return this.locations[i];
        }
    },

    getLocationOnCoord: function(coord) {
        for(let i = 0; i < this.locations.length; i++) {
            if (this.locations[i].coord == coord) return this.locations[i];
        }
        return null;
    },

    getRandomLocation: function(exceptionList, canDeepspace) {
        exceptionList = exceptionList || [];
        canDeepspace = canDeepspace || false;
        let temp = [];
        for(let i = 0; i < this.locations.length; i++)
        {
            if (exceptionList.indexOf(this.locations[i]) < 0) {
                if (canDeepspace)
                {
                    temp.push(this.locations[i]);
                }
                else if (!this.locations[i].isDeepspace()) {
                    temp.push(this.locations[i]);
                }
            }
        }

        temp = ST.Utils.shuffleArray(temp);
        return temp.pop();
    },

    getClosestDeepspace: function(currentLocation) {
        let dist = 99;
        let d;
        let loc;
        for(let i = 0; i < this.locations.length; i++) {
            if (this.locations[i].coord == currentLocation.coord) continue;
            if ( !this.locations[i].isDeepspace()) continue;
            d = Math.abs(this.locations[i].coord - currentLocation.coord);
            if (d < dist) {
                dist = d;
                loc = this.locations[i];
            }
        }
        return loc;
    },

    hasLocationCargoGear: function() {
        if (ST.EffectManager.hasEffect(ST.EFFECT.broken_port_gear)) return false;
        if (ST.EffectManager.hasEffect(ST.EFFECT.NO_PORT_GEAR) ||
            ST.EffectManager.hasEffect(ST.EFFECT.PORT_GEAR_BROKEN)) return false;
        return true;
    },

    addToLogbook: function(msgId, params) {
        let s = ST.getMsg(msgId, params);
        ST.Logbook.addNote(s);
    },

    getMsg: function(msgId, params) {
        params = params || [];

        if (msgId == undefined || msgId == null) return "";

        //var msg = ST.Msg[msgId];
        let msg = msgId;
        for(let i = 0; i < params.length; i++) {
            msg = msg.replace("%s", params[i]);
        }

        return msg;
    },

    getCargoByCode: function(code) {
        for(let i = 0; i < ST.GameTables.cargos.length; i++) {
            if (ST.GameTables.cargos[i].code == code) return ST.GameTables.cargos[i];
        }
        throw new Error("Ismeretlen cargo code: " + code);
    },

    getDistance: function(loc1, loc2) { return Math.abs(loc1.coord - loc2.coord); },



    //  @nem kell
    //  ezt hivja a scheduler
    //  player end action
    act_regi: function() {
        // console.log('Player turn, time: ' + ST.Scheduler.getTime());

        if (this.ActionManager.id == ST.ACTION_TRAVEL) {
            ST.Travel.arrive();
        }

        this.isPlayerActive = true;
        this.ActionManager.clear();
        //  regi
        // this.Scheduler.lock();

        ST.Scheduler.isRunning = false;
    },

    //  @nem kell
    //  player elkezd egy action-t
    playerStartAction_regi: function() {
        this.isPlayerActive = false;

        //  elozo verzio
        // ST.Statemanager.show("advancetime");
        // this.Scheduler.add(ST, false, ST.ActionManager.duration);
        // this.Scheduler.unlock();

        //  uj verzio
        ST.Statemanager.menuDisabled = true;
        ST.Statemanager.show("advancetime");        
        ST.Scheduler.add(ST, ST.ActionManager.duration);
        ST.Scheduler.advance();
    },

};

//  advertisement event
ST.AdvertisementEvent = {
    expireTurn: -1,
    isValid: false,
    init: function() {
        this.expireTurn = -1;
        this.isValid = false;
    },
    create: function(turn) {
        ST.FUEL_CAPACITY -= 20;
        if (ST.fuel.current > ST.FUEL_CAPACITY) {
            ST.fuel.current = ST.FUEL_CAPACITY;
        }
        // this.expireTurn = turn + 24 * 15;
        this.expireTurn = turn + 24 * ST.Utils.roll(12, 16);
        this.isValid = true;
    },
    isBankrupt: function() {
        if ( !this.isValid) return false;
        if (this.isActive()) return false;
        this.isValid = false;
        this.expireTurn = -1;
        return true;
    },
    isActive: function() { return ST.turn < this.expireTurn; },
};

ST.getPlanetType = function(planetType) { return ST.GameTables.planetType[planetType]; };

ST.wait = function(hour) {
    ST.ActionManager.set(ST.ACTION_WAIT, hour);
    ST.addToLogbook(ST.Msg.action_wait, [hour]);
};

ST.updateGameTime = function(currentTurn) {
    ST.turn = currentTurn;
    // this.day = Math.floor(this.turn / 24) + 1;
    // this.hour = this.turn % 24;
    ST.gameDate = new Date('2231-07-24 00:00:00');
    ST.gameDate.setHours(ST.gameDate.getHours() + currentTurn);
    ST.day = Math.floor(ST.turn / 24) + 1;
    ST.hour = ST.turn % 24;
};

//  yyyy. honp. dd. ora
ST.getFormattedGameDate = function(gd) {
    let year = gd.getFullYear();
    let month = gd.getMonth();
    let m = "";
    switch(month) {
        case 0: m = "jan"; break;
        case 1: m = "febr"; break;
        case 2: m = "marc"; break;
        case 3: m = "apr"; break;
        case 4: m = "maj"; break;
        case 5: m = "jun"; break;
        case 6: m = "jul"; break;
        case 7: m = "aug"; break;
        case 8: m = "szept"; break;
        case 9: m = "okt"; break;
        case 10: m = "nov"; break;
        case 11: m = "dec"; break;
    }
    let day = gd.getDate();
    let d = "";
    if (day < 10) d = "0" + day;
    else d = "" + day;
    let hours = gd.getHours();
    return ("" + year + ". " + m + ". " + d + ". " + hours + " ora");
};

ST.turnToGamedate = function(turn) {
    let d = new Date('2231-07-24 00:00:00');
    d.setHours(d.getHours() + turn);
    return ST.getFormattedGameDate(d);
};


ST.addDelayedMessage = function(time, msg) {
    ST.Scheduler.add(function() { ST.Logbook.addNote(msg); }, time);
},

ST.isGameEnd = function() {
    if (ST.money < 0) return ST.endReason.no_money;
    if (ST.engine.current < 0) return ST.endReason.no_engine;
    if (ST.hull.current < 0) return ST.endReason.no_hull;
    if (ST.position == ST.POSITION.Space && ST.fuel.current < 0) return ST.endReason.no_fuel;
    if (ST.position == ST.POSITION.Space && ST.spareparts.current == 0 && ST.engine.current < 1) return ST.endReason.stucked_space_no_engine;
    if (ST.position == ST.POSITION.Space && ST.spareparts.current == 0 && ST.hull.current < 1) return ST.endReason.stucked_space_no_hull;
    //  ido lejart
    if (ST.timeLimit - ST.day < 0) {
        if (ST.money >= ST.loanAmount) return ST.endReason.times_up;
        else return ST.endReason.times_up_no_money;
    } 
    return 0;
};

ST.gamestateControl = function() {
    let isEnd = ST.isGameEnd();
    if (isEnd) {
        ST.statistic.endReason = isEnd;
        if (isEnd == ST.endReason.times_up) ST.state = ST.STATE.Win;
        else ST.state = ST.STATE.Lose;
    }
};

//  @deprecated
ST.checkGameState = function() {
    if (ST.state == ST.STATE.Lose) { ST.Statemanager.showLose(); }
    else if (ST.state == ST.STATE.Win) { ST.Statemanager.showWin(); }
};

//  TODO
//      nincs kesz
ST.endGame = function() {
    ST.money -= ST.loanAmount;
    if (ST.money < 0) ST.money = 0;
    ST.statistic.point = 1000;
};

ST.repay = function() {
    if (ST.money >= ST.loanAmount) {
        ST.statistic.endReason = ST.endReason.repay_success;
        ST.state = ST.STATE.Win;
    }
    else {
        ST.statistic.endReason = ST.endReason.repay_failed;
        ST.state == ST.STATE.Lose;
    }
};

ST.removeEvent = function() {
    if (ST.currentEvent == null) return;
    console.log(ST.currentEvent.code + " event removed!");
    ST.EffectManager.removeEffect(ST.currentEvent.getEffect());
    ST.Logbook.addNote(ST.currentEvent.getDeactivateMessage());
    ST.currentEvent = null;
    ST.nextEventTurn = ST.turn + ST.Utils.roll(24, 36);
    console.log("next event turn: " + ST.nextEventTurn);
};

ST.setLocation = function(loc) {
    if (ST.currentLocation == loc) return;
    if (ST.currentLocation) ST.currentLocation.removeEffects();
    ST.lastLocation = ST.currentLocation;
    ST.currentLocation = loc;
    if (loc) ST.currentLocation.addEffects();
};

ST.updateLocation = function() {
    if (ST.currentLocation == null || ST.currentLocation.isDeepspace()) return;

    //  valszeg nem fog kelleni
    // if (this.lastUpdatedLocation != ST.currentLocation) {
    //     this._eventRemove();
    // }

    // this.lastUpdatedLocation = ST.currentLocation;

    ST.FuelStore.update();
    ST.SparepartStore.update();
    ST.Shipyard.update();
    ST.PassengerTransport.update();
    ST.JobManager.update();
    ST.CrewFind.update();
    ST.SouvenirsManager.update();
};

ST.updateEvent = function() {
    if (ST.currentEvent == null) return;
    if ( !ST.currentEvent.isActive(ST.turn)) { ST.removeEvent(); }
};

ST.newDay = function() {
    console.log("newDay: " + ST.turn);

    ST.updateEvent();
    ST.updateLocation();

    if (ST.AdvertisementEvent.isBankrupt()) {
        ST.addToLogbook(ST.Msg.advertismement_bankrupt);
    }

    let dailyExpense = ST.GameTables.dailyExpense + ST.crew.current;
    if (ST.position == ST.POSITION.Port && ST.EffectManager.hasEffect(ST.EFFECT.enviroment_protection_tax)) {
        dailyExpense += ST.ENVIROMENT_PROTECTION_TAX;
        ST.addToLogbook(ST.Msg.effect_enviroment_protection_tax, [ST.ENVIROMENT_PROTECTION_TAX]);
    }

    if (ST.AdvertisementEvent.isActive()) {
        dailyExpense -= 10;
        ST.addToLogbook(ST.Msg.effect_advertisement_contraband, [ST.ADVERTISEMENT_PRIZE]);
    }

    ST.money -= dailyExpense;
    ST.addToLogbook(ST.Msg.new_day, [dailyExpense]);

    ST.Scheduler.add(function() { ST.newDay(); }, 24);
};


ST.startPlayerTurn = function() {

    if (ST.state == ST.STATE.Lose) {
        ST.state = ST.STATE.No_game;
        ST.endGame();
        ST.Statemanager.showLose();
        return;
    }
    if (ST.state == ST.STATE.Win) {
        ST.state = ST.STATE.No_game;
        ST.endGame();
        ST.Statemanager.showWin();
        return;
    }

    if (ST.EffectManager.hasEffect(ST.EFFECT.corrupt_port_boss)) {
        ST.Statemanager.show("event_corrupt_port_boss");
        return;
    }
    if (ST.EffectManager.hasEffect(ST.EFFECT.hard_worker_sailor)) {
        ST.Statemanager.show("event_hard_worker_sailor");
        return;
    }
    if (ST.EffectManager.hasEffect(ST.EFFECT.wild_party)) {
        ST.Statemanager.show("event_wild_party");
        return;
    }
    if (ST.EffectManager.hasEffect(ST.EFFECT.contraband)) {
        ST.Statemanager.show("event_contraband");
        return;
    }
    if (ST.EffectManager.hasEffect(ST.EFFECT.wreck_traction)) {
        ST.Statemanager.show("event_wreck_traction");
        return;
    }
    if (ST.EffectManager.hasEffect(ST.EFFECT.advertisement)) {
        ST.Statemanager.show("event_advertisement");
        return;
    }

    ST.Statemanager.menuDisabled = false;
    ST.Statemanager.close();
};

ST.finishPlayerAction = function() {
    if (ST.currentEvent == null && ST.position != ST.POSITION.Space && ST.turn >= ST.nextEventTurn) {
        let eventid = ST.eventList.shift();
        let event = new ST.Events[eventid];
        if (event.canTrigger()) {
            console.log("event: " + eventid + ", aktivalodott");
            event.activate(ST.turn);
            ST.EffectManager.addEffect(event.getEffect());
            ST.Logbook.addNote(event.getActivateMessage());
            event.execute();
            ST.currentEvent = event;
        }
        else {
            console.log("event: " + eventid + ", NEM aktivalodott");
            ST.eventList.push(eventid);
        }
    }

    ST.isPlayerActive = true;
    ST.ActionManager.clear();

    ST.Scheduler.isRunning = false;
};

ST.startPlayerAction = function() {
    if (ST.ActionManager.duration < 1) return;

    ST.isPlayerActive = false;

    ST.Scheduler.add(function() { ST.finishPlayerAction(); }, ST.ActionManager.duration);
    ST.Scheduler.isRunning = true;

    ST.Statemanager.menuDisabled = true;
    ST.Statemanager.show("advancetime"); 

    // ST.Scheduler.start();
};







ST.ActionManager = {
    id: 'none',
    duration: 0,
    hasAction: function() { return this.id != 'none'; },
    getDuration: function() { return this.duration; },
    set: function(actionId, duration) {
        this.id = actionId;
        this.duration = duration;
    },
    setDuration: function(duration) {
        this.duration = duration;
    },
    clear: function() {
        this.id = '';
        this.duration = 0;
    }
};

ST.Statemanager = {
    states: {
        intro: true,
        game: false,
        win: false,
        lose: false,
    },
    gamestates: {
        map: false,
        spaceport: false,
        deepspace: false,
        ship: false,
        log: false,
        advancetime: false,
        event_corrupt_port_boss: false,
        event_hard_worker_sailor: false,
        event_wild_party: false,
        event_contraband: false,
        event_wreck_traction: false,
        event_advertisement: false,
    },
    menuDisabled: false,
    prevState: "",
    actualState: "",
    showGame: function() {
        ST.Statemanager.hideAllMain();
        ST.Statemanager.states.intro = false;
        ST.Statemanager.states.game = true;
        ST.Statemanager.show("map");
    },
    showIntro: function() {
        ST.Statemanager.hideAllMain();
        ST.Statemanager.states.intro = true;
        ST.Statemanager.states.game = false;
    },
    showWin: function() {
        ST.Statemanager.hideAllMain();
        ST.Statemanager.states.win = true;
    },
    showLose: function() {
        ST.Statemanager.hideAllMain();
        ST.Statemanager.states.lose = true;
    },
    show: function(id) {
        ST.Statemanager.prevState = ST.Statemanager.actualState;        
        if (id == "location") {
            if (ST.position == ST.POSITION.Port) {
                id = "spaceport";
            }
            if (ST.position == ST.POSITION.Space) {
                id = "deepspace";
            }
        }
        ST.Statemanager.actualState = id;
        ST.Statemanager.hideAll();
        ST.Statemanager.gamestates[id] = true;
    },
    //  aktualis ablak bezaras es az elozo megnyitasa
    close: function() {
        ST.Statemanager.show(ST.Statemanager.prevState);
    },
    hide: function() {
        ST.Statemanager.hideAll();
        ST.Statemanager.show("map");
    },
    hideAll: function() {
        for(let id in ST.Statemanager.gamestates) {
            ST.Statemanager.gamestates[id] = false;
        }
    },
    hideAllMain: function() {
        for(let id in ST.Statemanager.states) {
            ST.Statemanager.states[id] = false;
        }
    },
    reset: function() {
        ST.Statemanager.actualState = "map";
        ST.Statemanager.prevState = "";
    }
};
