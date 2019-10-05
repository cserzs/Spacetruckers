//  alap ertekek
ST.GameTables = {

    repairPrice: 20,

    systemMaxUpgrade: 5,
    crewCapacity: 5,
    souvenirCapacity: 6,

    //  alap napi koltseg
    dailyExpense: 20,
    enviromentProtectionTax: 25,

    //  leszallas es felszallas fuel fogyasztasa
    maneuverFuel: 1,

    //  utasok max utazasi ideje (turn)
    passengersLateLimit: 15 * 24,

    //  1 fuel fogyasztasa 10 tavolsag egysegnel
    fuelConsumeUnit: 10,

    //  engine => speed grade
    engineToSpeed: [0, 1, 2, 2, 3, 3],

    //  speed grade => speed (h / distance)
    speedToSpeed: [0, 15, 10, 5],

    //  speed grade => fuel consume (fuel / 10 distance)
    speedToFuel: [0, 1, 2, 3],

    //  az overdrive plusz fuel koltsege
    overdriveFuelPlus: 10,

    actionTime: {
        crew_repair: 12,
        cargo_unload: 16,
        port_repair: 14,
        port_upgrade: 16,
        cargo_load: 16,
        travel: 1,
        crew_hire: 1
    },

    spareparts: {
        //  port level => dobas
        1: [
            {q: 0, p: 0},
            {q: 0, p: 0},
            {q: 0, p: 0},
            {q: 0, p: 0},
            {q: 1, p: 15},
            {q: 1, p: 15}
        ],
        2: [
            {q: 0, p: 0},
            {q: 0, p: 0},
            {q: 1, p: 15},
            {q: 1, p: 15},
            {q: 1, p: 10},
            {q: 2, p: 10}
        ],
        3: [
            {q: 0, p: 0},
            {q: 1, p: 15},
            {q: 1, p: 10},
            {q: 1, p: 10},
            {q: 2, p: 10},
            {q: 2, p: 5}
        ],
        4: [
            {q: 1, p: 15},
            {q: 1, p: 10},
            {q: 1, p: 10},
            {q: 2, p: 10},
            {q: 2, p: 5},
            {q: 3, p: 5}
        ]
    },

    fuels: {
        //  port level => dobas
        1: [
            {q: 0, p: 0},
            {q: 10, p: 2},
            {q: 20, p: 1.75},
            {q: 50, p: 1.5},
            {q: 999, p: 1.25},
            {q: 999, p: 1}
        ],
        2: [
            {q: 20, p: 1.75},
            {q: 50, p: 1.5},
            {q: 999, p: 1.25},
            {q: 999, p: 1},
            {q: 999, p: 1},
            {q: 999, p: 1}
        ],
        3: [
            {q: 50, p: 1.5},
            {q: 999, p: 1.25},
            {q: 999, p: 1},
            {q: 999, p: 1},
            {q: 999, p: 1},
            {q: 999, p: 1}
        ],
        4: [
            {q: 999, p: 1.25},
            {q: 999, p: 1},
            {q: 999, p: 1},
            {q: 999, p: 1},
            {q: 999, p: 1},
            {q: 999, p: 1}
        ]
    },

    upgradePrice: {
        engine: [75, 150, 300, 600, 1200, 0],
        hull: [60, 120, 240, 480, 960, 0],
        cargogear: [20, 30, 60, 120, 240, 0]
    },

    planetType: [
        'Core',
        'Agriculture',
        'Industrial',
        'Mining',
        'Alien'
    ],

    cargoAvailable: {
        //  population => dobas
        1: [
            //  half, full
            [0, 0],
            [1, 0],
            [0, 1],
            [2, 0],
            [1, 1],
            [0, 2]
        ],
        2: [
            [2, 0],
            [1, 1],
            [2, 1],
            [1, 2],
            [1, 2],
            [1, 2]
        ],
        3: [
            [3, 0],
            [2, 1],
            [1, 2],
            [1, 2],
            [0, 3],
            [0, 3]
        ]
    },

    eventsOnce: [
        'technical_inspection',
        'quarantine',
        'meteor_impact',
        'orbital_accident',
        'urgent_harvest',
        'governor_day',
        'enviroment_prot_tax',
        'gambling',
        'fuel_stealing',
        'wreck_traction',
        'advertisement'
    ],

    eventsTwice: [
        'storm_1',
        'storm_2',
        'storm_3',
        'computer_virus',
        'corrupt_port_boss',
        'hard_worker_sailor',
        'crew_accident',
        'decontamination',
        'high_traffic',
        'local_gang',
        'civil_strike',
        'labor_union_strike',
        'broken_port_gear',
        'express_job',
        'thieves',
        'wild_party',
        'contraband',
        'stowaway',
        'engine_malfunction',
        'solar_flare',
        'lost_package',
        'meteor_swarm'
    ],

    cargos: [
        //  cargo_id => {}
        {id: 0, code: 'food',               name: 'Elelem',               baseValue: 93, distBonus: 30},
        {id: 1, code: 'gourmet_food',       name: 'Inyenc etelek',       baseValue: 127, distBonus: 43},
        {id: 2, code: 'processed_ore',      name: 'Feldolgozott ercek',     baseValue: 68, distBonus: 20},
        {id: 3, code: 'precious_metals',    name: 'Nemes femek',    baseValue: 83, distBonus: 25},
        {id: 4, code: 'crystals_gems',      name: 'Kristalyok, dragakovek',      baseValue: 147, distBonus: 51},
        {id: 5, code: 'machinery',          name: 'Munkagepek',          baseValue: 84, distBonus: 25},
        {id: 6, code: 'vehicles',           name: 'Jarmuvek',           baseValue: 93, distBonus: 30},
        {id: 7, code: 'tools',              name: 'Szerszamok',              baseValue: 74, distBonus: 21},
        {id: 8, code: 'parts',              name: 'Alkatreszek',              baseValue: 78, distBonus: 24},
        {id: 9, code: 'electronics',        name: 'Elektronikai eszkozok',        baseValue: 127, distBonus: 43},
        {id: 10, code: 'medicine',          name: 'Gyogyszerek',           baseValue: 103, distBonus: 33},
        {id: 11, code: 'adv_machinery',     name: 'Specialis munkagepek',     baseValue: 93, distBonus: 30},
        {id: 12, code: 'adv_electronics',   name: 'Szamitogep elektronika',   baseValue: 146, distBonus: 51},
        {id: 13, code: 'adv_tools',         name: 'Specialis szerszamok',         baseValue: 78, distBonus: 24},
        {id: 14, code: 'adv_parts',         name: 'Jarmu alkatreszek',         baseValue: 84, distBonus: 26},
        {id: 15, code: 'adv_vehicles',      name: 'Specialis jarmuvek',      baseValue: 103, distBonus: 34},
        {id: 16, code: 'chemicals',         name: 'Vegyszerek',         baseValue: 81, distBonus: 31},
        {id: 17, code: 'fuel',              name: 'Uzemanyag',              baseValue: 95, distBonus: 23},
        {id: 18, code: 'gas',               name: 'Gaz',                baseValue: 103, distBonus: 34},
        {id: 19, code: 'fertilizer',        name: 'Mutragya',         baseValue: 65, distBonus: 30},
        {id: 20, code: 'seed',              name: 'Magvak',               baseValue: 70, distBonus: 25},
        {id: 21, code: 'trash',             name: 'Szemet',              baseValue: 55, distBonus: 20}

    ],

    deepspace: {
        id: 0,
        code: 'deepspace',
        name: 'Deep space',
        shortDesc: "valahol az urben",
        population: 0,
        portLevel: 0,
        planet_type: ST.PLANET_TYPE_AGRI,
        type: ST.LOCATION_TYPE_PLANET,
        effects: [],
        eventexception: [],
        events: [],
        cargos: [],
        cargoDest: {
        }
    },

    locations: [
        //   eventexception: azok, amik nem lehetnek
        {
            id: 0,
            code: 'freeport',
            name: 'Freeport',
            shortDesc: "Hatalmas ipari komplexumok. Az allando munkaero hiany miatt tovabb tartanak a javitasok.",
            population: 3,
            portLevel: 4,
            planet_type: ST.PLANET_TYPE_AGRI,
            type: ST.LOCATION_TYPE_PLANET,
            effects: [ST.EFFECT.LABOR_SHORTAGE],
            eventexception: ['urgent_harvest'],
            cargos: [
                ['machinery', 2],
                ['vehicles', 2],
                ['tools', 2],
                ['parts', 2],
                ['trash', 2]
            ],
            cargoDest: {
                machinery: [ST.LOCATION.Aberdeen, ST.LOCATION.Daiton, ST.LOCATION.Eliott, ST.LOCATION.Galbena, ST.LOCATION.Hamaret, ST.LOCATION.Khurtau, ST.LOCATION.LiannJun, ST.LOCATION.Lucinda, ST.LOCATION.NewHongkong, ST.LOCATION.Silverhold],
                vehicles: [ST.LOCATION.Aberdeen, ST.LOCATION.Daiton, ST.LOCATION.Eliott, ST.LOCATION.Galbena, ST.LOCATION.Hamaret, ST.LOCATION.Khurtau, ST.LOCATION.LiannJun, ST.LOCATION.Lucinda, ST.LOCATION.NewHongkong, ST.LOCATION.Silverhold],
                tools: [ST.LOCATION.Aberdeen, ST.LOCATION.Daiton, ST.LOCATION.Eliott, ST.LOCATION.Galbena, ST.LOCATION.Hamaret, ST.LOCATION.Khurtau, ST.LOCATION.LiannJun, ST.LOCATION.Lucinda, ST.LOCATION.NewHongkong, ST.LOCATION.Silverhold],
                parts: [ST.LOCATION.Aberdeen, ST.LOCATION.Daiton, ST.LOCATION.Eliott, ST.LOCATION.Galbena, ST.LOCATION.Hamaret, ST.LOCATION.Khurtau, ST.LOCATION.LiannJun, ST.LOCATION.Lucinda, ST.LOCATION.NewHongkong, ST.LOCATION.Silverhold],
                trash: [ST.LOCATION.Hamaret]
            }
        },
        {
            id: 1,
            code: 'new_hongkong',
            name: 'New Hongkong',
            shortDesc: "A rendszer kozponti bolygoja.",
            population: 3,
            portLevel: 4,
            planet_type: ST.PLANET_TYPE_AGRI,
            type: ST.LOCATION_TYPE_PLANET,
            effects: [],
            eventexception: ['urgent_harvest'],
            cargos: [
                ['medicine', 1],
                ['adv_machinery', 1],
                ['adv_electronics', 1],
                ['adv_tools', 4],
                ['adv_parts', 4],
                ['trash', 1]
            ],
            cargoDest: {
                medicine: [ST.LOCATION.Aberdeen, ST.LOCATION.Daiton, ST.LOCATION.Eliott, ST.LOCATION.Freeport, ST.LOCATION.Galbena, ST.LOCATION.Hamaret, ST.LOCATION.Khurtau, ST.LOCATION.LiannJun, ST.LOCATION.Lucinda, ST.LOCATION.Silverhold],
                adv_machinery: [ST.LOCATION.Aberdeen, ST.LOCATION.Daiton, ST.LOCATION.Eliott, ST.LOCATION.Freeport, ST.LOCATION.Galbena, ST.LOCATION.Hamaret, ST.LOCATION.Khurtau, ST.LOCATION.LiannJun, ST.LOCATION.Lucinda, ST.LOCATION.Silverhold],
                adv_electronics: [ST.LOCATION.Aberdeen, ST.LOCATION.Daiton, ST.LOCATION.Eliott, ST.LOCATION.Freeport, ST.LOCATION.Galbena, ST.LOCATION.Hamaret, ST.LOCATION.Khurtau, ST.LOCATION.LiannJun, ST.LOCATION.Lucinda, ST.LOCATION.Silverhold],
                adv_tools: [ST.LOCATION.Aberdeen, ST.LOCATION.Daiton, ST.LOCATION.Eliott, ST.LOCATION.Freeport, ST.LOCATION.Galbena, ST.LOCATION.Hamaret, ST.LOCATION.Khurtau, ST.LOCATION.LiannJun, ST.LOCATION.Lucinda, ST.LOCATION.Silverhold],
                adv_parts: [ST.LOCATION.Aberdeen, ST.LOCATION.Daiton, ST.LOCATION.Eliott, ST.LOCATION.Freeport, ST.LOCATION.Galbena, ST.LOCATION.Hamaret, ST.LOCATION.Khurtau, ST.LOCATION.LiannJun, ST.LOCATION.Lucinda, ST.LOCATION.Silverhold],
                trash: [ST.LOCATION.Hamaret]
            }
        },
        {
            id: 2,
            code: 'aberdeen',
            name: 'Aberdeen',
            shortDesc: "Vegyiparrol es kutatobazisokrol ismert hold.",
            population: 1,
            portLevel: 3,
            planet_type: ST.PLANET_TYPE_AGRI,
            type: ST.LOCATION_TYPE_PLANET,
            effects: [],
            eventexception: ['local_gang', 'civil_strike', 'thieves', 'contraband', 'stowaway', 'urgent_harvest'],
            cargos: [
                ['medicine', 3],
                ['fertilizer', 2],
                ['seed', 2],
                ['trash', 1]
            ],
            cargoDest: {
                medicine: [ST.LOCATION.Daiton, ST.LOCATION.Eliott, ST.LOCATION.Freeport, ST.LOCATION.Galbena, ST.LOCATION.Hamaret, ST.LOCATION.Khurtau, ST.LOCATION.LiannJun, ST.LOCATION.Lucinda, ST.LOCATION.NewHongkong, ST.LOCATION.Silverhold],
                fertilizer: [ST.LOCATION.Eliott, ST.LOCATION.LiannJun],
                seed: [ST.LOCATION.Eliott, ST.LOCATION.LiannJun],
                trash: [ST.LOCATION.Hamaret]
            }
        },
        {
            id: 3,
            code: 'lucinda',
            name: 'Lucinda',
            shortDesc: "Epuloben levo urallomas. A kikotonek meg nincs kesz a kirakodo daruja.",
            population: 1,
            portLevel: 1,
            planet_type: ST.PLANET_TYPE_AGRI,
            type: ST.LOCATION_TYPE_PLANET,
            effects: [ST.EFFECT.NO_PORT_GEAR, ST.EFFECT.CONST_SPAREPART_PRICE],
            eventexception: ['storm_1', 'storm_2', 'storm_3', 'local_gang', 'civil_strike', 'broken_port_gear', 'thieves', 'contraband', 'stowaway', 'urgent_harvest', 'meteor_impact'],
            cargos: [
                ['electronics', 3],
                ['adv_electronics', 2],
                ['trash', 1]
            ],
            cargoDest: {
                electronics: [ST.LOCATION.Aberdeen, ST.LOCATION.Daiton, ST.LOCATION.Eliott, ST.LOCATION.Freeport, ST.LOCATION.Galbena, ST.LOCATION.Hamaret, ST.LOCATION.Khurtau, ST.LOCATION.LiannJun, ST.LOCATION.NewHongkong, ST.LOCATION.Silverhold],
                adv_electronics: [ST.LOCATION.Aberdeen, ST.LOCATION.Daiton, ST.LOCATION.Freeport, ST.LOCATION.Galbena, ST.LOCATION.Khurtau, ST.LOCATION.NewHongkong, ST.LOCATION.Silverhold],
                trash: [ST.LOCATION.Hamaret]
            }
        },
        {
            id: 4,
            code: 'daiton',
            name: 'Daiton',
            shortDesc: "Egy orias gazbolygo kozeleben keringo gazkinyero urallomas. A nagy gravitacio miatt a manoverezes tobb uzemanyagba kerul.",
            population: 2,
            portLevel: 3,
            planet_type: ST.PLANET_TYPE_AGRI,
            type: ST.LOCATION_TYPE_PLANET,
            effects: [ST.EFFECT.LARGE_GRAVITY],
            eventexception: ['storm_1', 'storm_2', 'urgent_harvest', 'meteor_impact'],
            cargos: [
                ['chemicals', 3],
                ['fuel', 3],
                ['gas', 3],
                ['trash', 1]
            ],
            cargoDest: {
                chemicals: [ST.LOCATION.Aberdeen, ST.LOCATION.Freeport, ST.LOCATION.Galbena, ST.LOCATION.Hamaret, ST.LOCATION.Khurtau, ST.LOCATION.Lucinda, ST.LOCATION.NewHongkong, ST.LOCATION.Silverhold],
                fuel: [ST.LOCATION.Aberdeen, ST.LOCATION.Eliott, ST.LOCATION.Freeport, ST.LOCATION.Galbena, ST.LOCATION.Hamaret, ST.LOCATION.Khurtau, ST.LOCATION.LiannJun, ST.LOCATION.Lucinda, ST.LOCATION.NewHongkong, ST.LOCATION.Silverhold],
                gas: [ST.LOCATION.Aberdeen, ST.LOCATION.Eliott, ST.LOCATION.Freeport, ST.LOCATION.Galbena, ST.LOCATION.Khurtau, ST.LOCATION.LiannJun, ST.LOCATION.Lucinda, ST.LOCATION.NewHongkong, ST.LOCATION.Silverhold],
                trash: [ST.LOCATION.Hamaret]
            }
        },
        {
            id: 5,
            code: 'eliott',
            name: 'Eliott',
            shortDesc: "Agrar bolygo. A rendszer elelmiszer ellatoja.",
            population: 2,
            portLevel: 2,
            planet_type: ST.PLANET_TYPE_AGRI,
            type: ST.LOCATION_TYPE_PLANET,
            effects: [],
            eventexception: [],
            cargos: [
                ['food', 4],
                ['gourmet_food', 2],
                ['trash', 1]
            ],
            cargoDest: {
                food: [ST.LOCATION.Aberdeen, ST.LOCATION.Daiton, ST.LOCATION.Freeport, ST.LOCATION.Galbena, ST.LOCATION.Hamaret, ST.LOCATION.Khurtau, ST.LOCATION.LiannJun, ST.LOCATION.Lucinda, ST.LOCATION.NewHongkong, ST.LOCATION.Silverhold],
                gourmet_food: [ST.LOCATION.Aberdeen, ST.LOCATION.Daiton, ST.LOCATION.Freeport, ST.LOCATION.Galbena, ST.LOCATION.Lucinda, ST.LOCATION.NewHongkong, ST.LOCATION.Silverhold],
                trash: [ST.LOCATION.Hamaret]
            }
        },
        {
            id: 6,
            code: 'khurtau',
            name: 'Khurtau',
            shortDesc: "A bolygo hirhedt a felszin alatt talalhato bortontelepeirol. Az elitelteket a banyakban dolgoztatjak. A szokest a savas atmoszfera neheziti, ami a hajokban is serulest tud okozni.",
            population: 1,
            portLevel: 2,
            planet_type: ST.PLANET_TYPE_AGRI,
            type: ST.LOCATION_TYPE_PLANET,
            effects: [ST.EFFECT.ACID_ATMOSPHERE, ST.EFFECT.PRISON_PLANET],
            eventexception: ['technical_inspection', 'urgent_harvest'],
            cargos: [
                ['processed_ore', 3],
                ['precious_metals', 1],
                ['trash', 1]
            ],
            cargoDest: {
                processed_ore: [ST.LOCATION.Freeport, ST.LOCATION.NewHongkong, ST.LOCATION.Aberdeen, ST.LOCATION.Galbena],
                precious_metals: [ST.LOCATION.Freeport, ST.LOCATION.NewHongkong, ST.LOCATION.Aberdeen, ST.LOCATION.Lucinda, ST.LOCATION.Galbena],
                trash: [ST.LOCATION.Hamaret]
            }
        },
        {
            id: 7,
            code: 'galbena',
            name: 'Galbena',
            shortDesc: "A rendszer hajogyara talalhato itt, emiatt a hajo javitas is olcsobb, mint mashol. Itt mindig van alkatresz a hajohoz.",
            population: 2,
            portLevel: 4,
            planet_type: ST.PLANET_TYPE_AGRI,
            type: ST.LOCATION_TYPE_PLANET,
            effects: [ST.EFFECT.CHEAPER_PORT_REPAIR, ST.EFFECT.ALWAYS_SPAREPART],
            eventexception: ['urgent_harvest'],
            cargos: [
                ['vehicles', 2],
                ['adv_machinery', 2],
                ['adv_vehicles', 3],
                ['trash', 1]
            ],
            cargoDest: {
                vehicles: [ST.LOCATION.Aberdeen, ST.LOCATION.Daiton, ST.LOCATION.Eliott, ST.LOCATION.Freeport, ST.LOCATION.Hamaret, ST.LOCATION.Khurtau, ST.LOCATION.LiannJun, ST.LOCATION.Lucinda, ST.LOCATION.NewHongkong, ST.LOCATION.Silverhold],
                adv_machinery: [ST.LOCATION.Aberdeen, ST.LOCATION.Daiton, ST.LOCATION.Freeport, ST.LOCATION.Khurtau, ST.LOCATION.Lucinda, ST.LOCATION.NewHongkong, ST.LOCATION.Silverhold],
                adv_vehicles: [ST.LOCATION.Aberdeen, ST.LOCATION.Daiton, ST.LOCATION.Freeport, ST.LOCATION.Khurtau, ST.LOCATION.Lucinda, ST.LOCATION.NewHongkong, ST.LOCATION.Silverhold],
                trash: [ST.LOCATION.Hamaret]
            }
        },
        {
            id: 8,
            code: 'hamaret',
            name: 'Hamaret',
            shortDesc: "Egy szebb napokat is latott kimeruloben levo banyasztelep. Manapsag kevesen fordulnak meg itt. Alkatresz sosincs es a szerelok is megbizhatatlanok.",
            population: 1,
            portLevel: 2,
            planet_type: ST.PLANET_TYPE_AGRI,
            type: ST.LOCATION_TYPE_PLANET,
            effects: [ST.EFFECT.NO_SPAREPART, ST.EFFECT.LAZY_MECHANIC],
            eventexception: ['high_traffic', 'technical_inspection', 'express_job', 'urgent_harvest'],
            cargos: [
                ['processed_ore', 1],
                ['tools', 1]
            ],
            cargoDest: {
                processed_ore: [ST.LOCATION.Freeport, ST.LOCATION.NewHongkong],
                tools: [ST.LOCATION.Freeport, ST.LOCATION.NewHongkong, ST.LOCATION.Daiton, ST.LOCATION.Khurtau, ST.LOCATION.Galbena, ST.LOCATION.Silverhold]
            }
        },
        {
            id: 9,
            code: 'liann_jun',
            name: 'Liann Jun',
            shortDesc: "Idilli bolygo, oriasi gyumolcsfa ligetekkel. Igazi turista paradicsom (dragabb szuvenirek).",
            population: 1,
            portLevel: 1,
            planet_type: ST.PLANET_TYPE_AGRI,
            type: ST.LOCATION_TYPE_PLANET,
            effects: [ST.EFFECT.TOURIST_PARADISE],
            eventexception: [],
            cargos: [
                ['food', 3],
                ['trash', 1]
            ],
            cargoDest: {
                food: [ST.LOCATION.Aberdeen, ST.LOCATION.Daiton, ST.LOCATION.Eliott, ST.LOCATION.Freeport, ST.LOCATION.Galbena, ST.LOCATION.Hamaret, ST.LOCATION.Khurtau, ST.LOCATION.Lucinda, ST.LOCATION.NewHongkong, ST.LOCATION.Silverhold],
                trash: [ST.LOCATION.Hamaret]
            }
        },
        {
            id: 10,
            code: 'silverhold',
            name: 'Silverhold',
            shortDesc: "Aszteroidak banyaszataval foglalkozo urallomas. Az aszterodiak allando veszelyt jelentenek a hajokra.",
            population: 2,
            portLevel: 3,
            planet_type: ST.PLANET_TYPE_AGRI,
            type: ST.LOCATION_TYPE_PLANET,
            effects: [ST.EFFECT.ASTEROID_FIELD],
            eventexception: ['storm_1', 'storm_2', 'storm_3', 'orbital_accident', 'urgent_harvest', 'meteor_impact'],
            cargos: [
                ['processed_ore', 2],
                ['precious_metals', 2],
                ['crystals_gems', 2],
                ['trash', 1]
            ],
            cargoDest: {
                processed_ore: [ST.LOCATION.Freeport, ST.LOCATION.NewHongkong, ST.LOCATION.Aberdeen, ST.LOCATION.Galbena],
                precious_metals: [ST.LOCATION.Freeport, ST.LOCATION.NewHongkong, ST.LOCATION.Aberdeen, ST.LOCATION.Galbena, ST.LOCATION.Lucinda, ST.LOCATION.Daiton],
                crystals_gems: [ST.LOCATION.Freeport, ST.LOCATION.NewHongkong, ST.LOCATION.Aberdeen, ST.LOCATION.Galbena, ST.LOCATION.Lucinda, ST.LOCATION.Daiton],
                trash: [ST.LOCATION.Hamaret]
            }
        }
    ],

    crewAvailable: {
        //  population => roll => crew
        1: [0, 0, 0, 1, 1, 2],
        2: [0, 0, 1, 1, 2, 2],
        3: [0, 1, 1, 2, 2, 3]
    },

    souvenirs: [
        { id: 'exclusive_wine',     priceRange: [2, 10], name: "Bor kulonlegesseg"},
        { id: 'jewelry',            priceRange: [30, 50], name: "Ekszer"},
        { id: 'antique_items',      priceRange: [10, 60], name: "Antik targy"},
        { id: 'coins',              priceRange: [15, 30], name: "Penzerme"},
        { id: 'perfume',            priceRange: [10, 35], name: "Parfum"},
        { id: 'exotic_spice',       priceRange: [2, 10], name: "Egzotikus fuszer"}
    ]
};