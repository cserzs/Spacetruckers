ST.Msg = {
    get_del: function(msgId, params) {
        params = params || [];

        if (msgId == undefined || msgId == null) return "";

        //var msg = ST.Msg[msgId];
        var msg = msgId;
        for(var i = 0; i < params.length; i++) {
            msg = msg.replace("%s", params[i]);
        }

        return msg;
    },


    ok: 0,

    debug_proba: 'Ez egy proba message!',

    action_disabled: 'Ez a cselekves nem elerheto!', // 'Action disabled',

    not_enough_money: 'Nincs eleg penzed',// 'Not enough money',
    not_enough_capacity: 'Nincs eleg kapacitas!',// 'Not enough capacity',
    not_enough_spareparts: 'Nincs eleg alkatresz!',// 'Not enough spareparts',
    not_enough_crew: 'Nincs eleg legenyseg!',// 'Not enough crew',
    not_enough_fuel: 'Nincs eleg uzemanyag!',// 'Not enough fuel!',

    no_cargo_gear: 'Nincs rakodo daru!',// 'There is no cargo gear!',
    broke_ship_cargo_gear: 'A hajo rakodo daruja serult!',// 'The cargo gear of the ship is damaged!',

    same_location: 'Eppen itt vagy!',// 'You are already here!',
    ship_system_broke: "A hajo egyik rendszere nem uzemel. Nem lehet mozogni!",// "One of the ship's systems is broken. It can't move!",

    system_doesnt_need_repair: 'A hajorendszernek nincs szuksege javitasra!',// 'System does not need repair',
    system_is_fully_upgraded: 'A hajorendszer a legmodernebb!',// 'System is fully upgraded',

    job_destination_doesnt_match: 'Ezt a szallitmanyt nem ide kell hozni!',// 'Job destination does not match.',

    no_more_room_for_crew: 'Nincs tobb hely egy uj matroznak!',// 'There is no more room for a new crew member!',

    buy_souvenir: 'Vettel egy szuvenirt!',// 'You have bought a souvenir!',
    sell_souvenir: 'Eladtal egy szuvenirt!',// 'You have sold a souvenir!',
    souvenir_capacity_full: 'Nincs tobb szuvenireknek!',// 'No more free capacity!',

    end_no_money: 'Elfogyott a penzed!',
    end_no_engine: 'Felrobbant a hajtomu!',
    end_no_hull: 'A hajotest vegzetes serulest szenvedett!',
    end_no_fuel: 'Nincs uzemanyag. Orokke elvesztel az urben!',
    end_times_up_no_money: 'Lejart a visszafizetes hatarideje. A bank lefoglalta a hajodat!',
    end_times_up: 'Lejart a visszafizetes hatarideje!',
    end_stucked_space_no_engine: "Az urben rekedtel egy mukodeskeptelen hajtomuvel!",
    end_stucked_space_no_hull: "Az urben rekedtel egy serult hajotesttel. Ezek az utolso levegovetleid!",
    end_repay_success: "Sikerult visszafizetned a kolcsont a banknak!",
    end_repay_failed: "Nem sikerult visszafizetni a kolcsont! A bank lefoglalta a hajodat!",



    passengers_leave: '%s utas elhagyta a hajot, fizettseg: %s kredit',// '%s passenger%s leave the ship, payment: %s credit',
    // passengers_leave_no_pay: "%s passenger%s leave the ship, %s passenger%s don't pay because late, payment: %s credit",
    passengers_leave_no_pay: "%s utas elhagyta a hajot, % utas nem fizetett a keses miatt, fizettseg: %s kredit",
    passenger_embark: "Egy utas elszallasolva!",

    new_day: 'Uj nap: %s kredit napi kiadasok miatt levonva',// 'New day: %s credit daily expense removed',

    travel_no_destination: "Nincs uticel megadva!",
    travel_damage_engine: "Az igenybeveteltol romlott a motor allapota (engine -1)", //The engine's status is dropped.",
    travel_overdrive: "A motor allapota romlott a tulterheles miatt. (-%s engine)",
    travel_arrive: "Megerkeztel!",

    advertismement_bankrupt: "A napi hirek szerint nem valt be az STA reklamiroda uj technikaja, ezert " +
        "a ceg ellen csodeljarast inditottak. A szerzodesunk mehet a kukaba.",

    //  action processing

    action_crew_repair: 'A javitas %s orat vesz igenybe!',// 'The repairing takes %s hours',
    action_cargo_unload: 'Az aru kirakodas %s orat vesz igenybe!',// 'The cargo unloading takes %s hours',
    action_port_repair: 'A javitas %s orat vesz igenybe!',// 'The repairing takes %s hours',
    action_port_upgrade: 'A hajorendszer fejlesztese %s orat vesz igenybe!',// 'The ship upgrading takes %s hours',
    action_cargo_load: 'Az aru berakodas %s orat vesz igenybe!',// 'The cargo loading takes %s hours',
    action_travel: 'Az utazas ideje: %s ora',// 'The traveling takes %s hours',
    action_wait: 'Varakozol %s orat',// 'Waiting %s hour(s)',
    action_crew_hire: 'Uj matroz felberlese. Papirok, papirok es papirok...',// 'Hiring a new crew member. Papers, papers...',
    action_wreck_traction: "Megkezdtuk a vastormelek osszetereleset es vontatasat.",

    //  @nem kell, mert a location leirasban lesznek inkabb
    //  location effects
    // loc_effect_cheaper_port_repair: "Olcso hajo javitas.",
    // loc_effect_always_sparepart: "Mindig van potalkatresz.",
    // loc_effect_asteroid_field: "Aszteroid mezo.",
    // loc_effect_tourist_paradise: "Turista paradicsom.",
    // loc_effect_no_sparepart: "Nincsennek alkatreszek.",
    // loc_effect_lazy_mechanic: "Megbizhatatlan szerelok.",
    // loc_effect_large_gravity: "Nagy gravitacio.",
    // loc_effect_acid_atmosphere: "Savas atmoszfera.",
    // loc_effect_prison_planet: "Borton bolygo.",

    //  effects

    // effect_unfinished_port_repair: 'The chief of the shipyard has stepped down our money. There were no repairing.',
    effect_unfinished_port_repair: 'A hajomuhely fonoke lelepett a penzukkel. A hajo javitas nem lett kesz.',
    // effect_no_port_repair: 'The shipyard does not make repairing!',
    effect_no_port_repair: 'A hajomuhely nem vegez javitast!',
    effect_acid_atmospher: 'Leszallaskor a savas legkor karositotta a hajotestet (-1 hull)!',
    effect_asteroid_field: 'Az aszteroida mezo kisebb kart tett a hajotestben (-1 hull)',
    effect_prison_planet: '',
    effect_orbital_trash: 'Orbitalis palyan keringo tormelek!',
    effect_enviroment_protection_tax: "Kornyezetvedelmi ado: %s",
    effect_advertisement_contraband: 'Reklambevetel: +%s credit',

    //  events

    event_storm_1_act: "Hatalmas ereju szelvihar varhato",
    event_storm_1_desc: "Hurrikan ereju szelek tombolnak (+1 fuel utazaskor)",
    event_storm_1_deact: "A szelvihar elmult",

    event_storm_2_act: "Hatalmas ereju vihar varhato",
    event_storm_2_desc: "Az oriasi ereju vihar miatt nem indulhatnak csillaghajok",
    event_storm_2_deact: "A vihar elmult",
    storm_2_no_travel: 'A vihar miatt nem lehet felszallni',

    event_storm_3_act: "Hatalmas ereju vihar varhato",
    event_storm_3_desc: "Hatalmas vihar tombol, az elektromos kisulesek akar a hajoban is kart tehetnek.",
    event_storm_3_deact: "A vihar elmult",
    effect_storm_3: "Az elektromos kisulesek kart okoztak a hajoban (hull-1)",

    event_computer_virus_act: "",
    event_computer_virus_desc: "Computer virus miatt lassabban mennek az adminisztraciok!",
    event_computer_virus_deact: "",

    event_corrupt_port_boss_act: "A kikotofonok erkezett a hajora.",
    event_corrupt_port_boss_desc: "",
    event_corrupt_port_boss_deact: "",

    event_hard_worker_sailor_act: "",
    event_hard_worker_sailor_desc: "",
    event_hard_worker_sailor_deact: "",
    event_hard_worker_sailor_left: "Egy matroz felmondott a kemeny munka miatt (crew -1)",

    event_crew_accident_act: "Egy matroz balesetet szenvedett, ezert orvosi ellatasra szorult (crew-1, -%s cr).",
    event_crew_accident_desc: "",
    event_crew_accident_deact: "",

    event_decontamination_act: "",
    event_decontamination_desc: "",
    event_decontamination_deact: "",
    effect_decontamination: "A kikotofelugyelet fertotlenitest rendelt el minden kirakodo hajon. (+%s ora)",

    event_high_traffic_act: "",
    event_high_traffic_desc: "A kikotoiranyitas megnovekedett forgalomrol tajekoztatja a hajokapitanyokat!",
    event_high_traffic_deact: "",
    effect_high_traffic: "A nagy forgalom miatt nem kaptunk felszallasi engedelyt. Varnunk kell (+%s ora)!",

    event_local_gang_act: "",
    event_local_gang_desc: "",
    event_local_gang_deact: "",
    effect_local_gang: "Harom alak jelent meg a hajonal es felhivtak a figyelmemet, hogy az utobbi hetekben sok betores tortent" +
        " a kikotoben allo hajoknal. Felajanlottak, hogy %s creditert garantaljak a biztonsagunkat!",

    event_civil_strike_act: "",
    event_civil_strike_desc: "A varosban tuntetesekkel es sztrajkokkal tiltakoznak a bolygominiszter ellen! (nincs szuvenir/crew/store)",
    event_civil_strike_deact: "",
    effect_civil_strike: 'A szolgaltatas sztrajk miatt szunetel.',

    event_labor_union_strike_act: "",
    event_labor_union_strike_desc: "A Kikotoi Munkasok Szakszervezete %s oras munkabeszuntetest hirdetett! (nincs load/unload/shipyard)",
    event_labor_union_strike_deact: "",
    effect_labor_union_strike: 'A szolgaltatas sztrajk miatt szunetel.',

    event_broken_port_gear_act: "",
    event_broken_port_gear_desc: "Meghibasodott a kikoto daruja, ezert a hajo darujat kell hasznalni (ha van).",
    event_broken_port_gear_deact: "",

    event_technical_inspection_act: "",
    event_technical_inspection_desc: "",
    event_technical_inspection_deact: "",
    event_technical_inspection_fine: "A kikotoi hatosag muszaki ellenorzest tartott a hajon. A hibas hajomodulok miatt %s credit birsagot kellett fizetni.",
    event_technical_inspection_crew: "A kikotoi hatosag muszaki ellenorzest tartott a hajon, de a legenyseg sikeresen " +
        "jatszotta el, hogy eppen a felujitast vegzik a hajomodulokon!",
    event_technical_inspection_ok: "A kikotoi hatosag muszaki ellenorzest tartott a hajon, de mindent rendben talaltak.",

    event_express_job_act: "",
    event_express_job_desc: "",
    event_express_job_deact: "",
    effect_express_job: "Surgos szallitasra keresnek teherhajokat! Az uticel: %s, extra fizettseg!",

    event_thieves_act: "",
    event_thieves_desc: "",
    event_thieves_deact: "",
    effect_thieves_no_steal: "A legenyseg gyanus alakokat vett eszre a rakodonyilasnal, ezert atvizsgaltattam veluk " +
        "a hajot. Meg idoben sikerult lefulelni a tolvajokat, ezert nem tunt el semmi a hajorol.",
    effect_thieves_steal_money: "Tolvajok lopoztak a hajora, de mar keson vettem eszre. (-%s credit)",
    effect_thieves_steal_sparepart: "Tolvajok lopoztak a hajora, de mar keson vettem eszre. (-%s alkatresz)",
    effect_thieves_steal_fuel: "Tolvajok lopoztak a hajora, de mar keson vettem eszre. (-%s fuel)",
    effect_thieves_steal_engine: "Tolvajok lopoztak a hajora, de mar keson vettem eszre. (-1 engine)",

    event_contraband_act: "",
    event_contraband_desc: "",
    event_contraband_deact: "",
    event_contraband_crew_success: "A legenyseg csempeszarut talalt a hajo raktereben. Meg a kikotofelugyelet " +
        "erkezese elott kidobattam mindet!",

    event_stowaway_act: "",
    event_stowaway_desc: "",
    event_stowaway_deact: "",
    event_stowaway_crew_success: "A legenyseg potyautasokat talalt a hajo raktereben. Meg a kikotofelugyelet " +
        "erkezese elott leparancsoltam oket a hajorol!",
    event_stowaway_crew_failed: "A kikotofelugyelet potyautasokat talalt a hajon, ezert %s credit birsagot kellett fizetnem!",

    event_engine_malfunction_act: "",
    event_engine_malfunction_desc: "",
    event_engine_malfunction_deact: "",
    event_engine_malfunction: "Varatlan hibat jeleztek a gephazbol (engine -1).",

    event_solar_flare_act: "",
    event_solar_flare_desc: "A kikotoiranyitas szokatlanul nagy csillagkitoresek eszlelt, ezert nem javasoljak az urutazast.",
    event_solar_flare_deact: "",
    event_solar_flare: "A csillagkitores miatt a navigaciosrendszer hibasan szamolt, ki tudja hova erkezunk...",

    event_quarantine_act: "",
    event_quarantine_desc: "Tomeges megbetegedesek miatt karantent rendeltek el a varosban.",
    event_quarantine_deact: "",
    event_quarantine: "A karanten ideje alatt tilos a kikoto elhagyasa.",
    event_quarantine_infection: "Az egyik legenysegi tagon megjelentek a betegseg tunetei, ezert azonnal korhazba vitettem (crew -1). ",

    event_meteor_impact_act: "Meteor becsapodas tortent. A nagy mennyisegu tormelek, korom es por miatt nehezebb a felszallas.",
    event_meteor_impact_desc: "Meteor becsapodas tortent. A nagy mennyisegu tormelek, korom es por miatt nehezebb a felszallas.",
    event_meteor_impact_deact: "",

    event_orbital_accident_act: "A helyi hircsatorna az Orplex1, orbitalis palyan keringo raktarallomason tortent robbanasrol " +
        "szamolt be. Az urallomast sulyos karok ertek, tobb ezer kontener szorodott az urbe. Minden hajokapitanyt fokozott " +
        "ovatossagra intenek es mar elkezdtek sugarozni a kerulo manoverek koordinatait.",
    event_orbital_accident_desc: "",
    event_orbital_accident_deact: "",

    event_urgent_harvest_act: "",
    event_urgent_harvest_desc: "Betakaritasi munkak miatt szunetel az arufeltoltes.",
    event_urgent_harvest_deact: "",
    event_urgent_harvest: "Betakaritasi munkak miatt szunetel az arufeltoltes.",

    event_lost_package_act: "",
    event_lost_package_desc: "",
    event_lost_package_deact: "",
    event_lost_package: "Szerencses nap, egy elhagyott csomagot talaltam (+1 %s).",

    event_meteor_swarm_act: "",
    event_meteor_swarm_desc: "A kikotoiranyitas eros meteor tevekenyseget jelez az elkovetkezo %s oraban!",
    event_meteor_swarm_deact: "",
    event_meteor_swarm_hull: "Egy meteor felsertette a hajoburkolatat (-1 hull).",

    event_governor_day_act: "A csillagrendszer minden bolygojan ma tartjak a Kormanyzo Napjat. A rendszer kormanyzojanak " +
        "dicso unnepet!",
    event_governor_day_desc: "A Kormanyzo Napja unnep van! (A rakodas csak kulondij (%s cr) elleneben engedelyezett!)",
    event_governor_day_deact: "",
    event_governor_day_no_service: "A Kormanyzo Napja miatt a szolgaltatas szunetel.",
    event_governor_day_bonus_price: "A Kormanyzo Napja miatt az %s credit kulondij levonasra kerult!",

    event_enviroment_prot_tax_act: "A bolygominiszter a kornyezet megovasa erdekeben, kornyezetvedelmi adot vetett ki " +
        "a teherszallito hajokra! Emiatt a kikotoben toltott, napi dokkolasi dij dragabb lett.",
    event_enviroment_prot_tax_desc: "",
    event_enviroment_prot_tax_deact: "",

    event_gambling_act: "Az egyik kabatom zsebeben talaltam egy regi lottoszelvenyt, harom talalat volt rajta (+%s credit).",
    event_gambling_desc: "",
    event_gambling_deact: "",

    event_fuel_stealing_act: "",
    event_fuel_stealing_desc: "",
    event_fuel_stealing_deact: "",
    event_fuel_stealing: "Az egyik legenysegi tagot rajtakaptam, hogy a hajo uzemanyagjaval seftel. Azonnal kirugtam. "+
        "Ujraellenoriztem az uzemanyag adminisztraciot es kiderult, hogy azokat is meghamisitotta, ezert " +
        "kevesebb uzemanyagom van, mint azt gondoltam. (crew -1, fuel -%s)",

    event_wreck_traction_act: "Hivasom van a kommunikacios csatornan.",
    event_wreck_traction_desc: "",
    event_wreck_traction_deact: "",
    event_wreck_traction_accident: "Egy hibasan rogzitett vascsomag a hajonak utkozott, felsertve a burkolatot. (hull -1)",

    event_advertisement_act: "Hivasom van a kommunikacios csatornan.",
    event_advertisement_desc: "",
    event_advertisement_deact: "",

    // event_accident: 'A crew member has injured in an accident. I send him home, it cost me %s credit!'
    event_accident: 'Egy matroz megserult egy balesetben. Haza kuldtem. Ez %s kreditbe kerult!'

};