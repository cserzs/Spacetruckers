var ctrls = angular.module('SpaceTruckersApp.Controllers', []);

ctrls.controller('MainController', ['$scope', 'growl', 'ST',
    function($scope, growl, ST) {
        $scope.ST = ST;
        $scope.Windows = ST.windows;

        $scope.Mainstate = ST.Statemanager.states;
        $scope.Gamestates = ST.Statemanager.gamestates;

        $scope._success = function(text) { growl.success(text); };
        $scope._info = function(text) { growl.info(text); };
        $scope._warning = function(text) { growl.warning(text); };
        $scope._error = function() { growl.error(text); };

    }
]);

ctrls.controller('StartController', ['$scope', 'ST',
    function($scope, ST) {
        $scope.hasActiveGame = ST.hasActiveGame();
        $scope.todoVisible = false;
        $scope.start = function() {
            ST.init();
            ST.setDebugData();
            ST.Statemanager.showGame();
        };
        $scope.continue = function() {
            if ( !$scope.hasActiveGame) return;
            ST.Statemanager.showGame();
        };
    }
]);

ctrls.controller('GameController', ['$scope', 'ST',
    function($scope, ST) {

        $scope.isFunctionDisabled = function(result) {
            return result != ST.Msg.ok;
        };

        $scope.wait = function(hour) {
            if (ST.Statemanager.menuDisabled) return;

            ST.Travel.clear();
            ST.wait(hour);
            ST.startPlayerAction();
        };

        $scope.home = function() { ST.Statemanager.showIntro(); };
        $scope.showGameWindow = function(id) {
            if (ST.Statemanager.menuDisabled) return;            
            ST.Statemanager.show(id);
        };

        $scope.getEventDesc = function() {
            if (ST.currentEvent == null) return "";
            return ST.currentEvent.getDesc();
        };

    }
]);


ctrls.controller('WinController', ['$scope',
    function($scope) {
        $scope.home = function() {
            ST.state = ST.STATE.No_game;
            ST.Statemanager.showIntro();
        };
    }
]);

ctrls.controller('LoseController', ['$scope',
    function($scope) {
        $scope.reason = ST.Msg["end_" + ST.statistic.endReason];
        $scope.home = function() {
            ST.state = ST.STATE.No_game;
            ST.Statemanager.showIntro();
        };
    }
]);

ctrls.controller('ShipController', ['$scope', 'ST',
    function($scope, ST) {

        $scope.getRepairStatus = function(system) {
            if (ST.spareparts.current < 1) return ST.Msg.not_enough_spareparts;
            if (ST.crew.current < 1) return ST.Msg.not_enough_crew;
            if (system.current >= system.max) return ST.Msg.system_doesnt_need_repair;
            return ST.Msg.ok;
        };
        $scope.repair = function(system) {
            var result = $scope.getRepairStatus(system);
            if (result) { this._warning(result); }
            else {
                ST.CrewRepair.repair(system);
                ST.startPlayerAction();
            }
        };
        $scope.repairTime = ST.CrewRepair.getRequiredTime();

        $scope.getCompleteJobStatus = function(job) {
            if (ST.EffectManager.hasEffect(ST.EFFECT.labor_union_strike)) return ST.Msg.effect_labor_union_strike;
            if (job.destination.id != ST.currentLocation.id) return ST.Msg.job_destination_doesnt_match;
            if ( !ST.hasLocationCargoGear()) {
                if (ST.cargogear.current < 1) return ST.Msg.no_cargo_gear;
            }
            return ST.Msg.ok;
        };
        $scope.completeJob = function(job) {
            var result = $scope.getCompleteJobStatus(job);
            if (result) { this._warning(result); }
            else {
                ST.JobManager.completeJob(job);
                ST.startPlayerAction();
            }
        };
        $scope.unloadTime = ST.JobManager.getUnloadTime();

        $scope.getSouvenirSellStatus = function(sv) {
            if (ST.EffectManager.hasEffect(ST.EFFECT.governor_day)) return ST.Msg.event_governor_day_no_service;
            if (ST.EffectManager.hasEffect(ST.EFFECT.civil_strike)) return ST.Msg.effect_civil_strike;
            return ST.Msg.ok;
        };
        $scope.sellSouvenir = function(sv) {
            var result = $scope.getSouvenirSellStatus(sv);
            if (result) { this._warning(result); }
            else {
                if (ST.EffectManager.hasEffect(ST.EFFECT.quarantine) && ST.currentEvent.hasInfection()) {
                    this._warning(ST.Msg.event_quarantine_infection);
                }
                ST.SouvenirsManager.sell(sv);
                this._success(ST.Msg.sell_souvenir);
            }
        };
    }
]);

ctrls.controller('DeepspaceController', ['$scope', 'ST',
    function($scope, ST) {
    }
]);

ctrls.controller('SpaceportController', ['$scope', 'ST',
    function($scope, ST) {

        $scope.getRepairStatus = function(system) {
            //if (ST.EffectManager.hasEffect(ST.Effect.NO_PORT_REPAIR)) return ST.Msg.effect_no_port_repair;
            if (ST.EffectManager.hasEffect(ST.EFFECT.governor_day)) return ST.Msg.event_governor_day_no_service;
            if (ST.EffectManager.hasEffect(ST.EFFECT.labor_union_strike)) return ST.Msg.effect_labor_union_strike;
            if (system.current >= system.max) return ST.Msg.system_doesnt_need_repair;
            if (ST.money < ST.Shipyard.getRepairPrice()) return ST.Msg.not_enough_money;
            return ST.Msg.ok;
        };
        $scope.repair = function(system) {
            var result = $scope.getRepairStatus(system);
            if (result) { this._warning(result); }
            else {
                ST.Shipyard.repair(system);
                ST.startPlayerAction();
            }
        };
        $scope.repairTime = ST.Shipyard.getRepairTime();

        $scope.getUpgradeStatus = function(system) {
            if (ST.EffectManager.hasEffect(ST.EFFECT.governor_day)) return ST.Msg.event_governor_day_no_service;
            if (ST.EffectManager.hasEffect(ST.EFFECT.labor_union_strike)) return ST.Msg.effect_labor_union_strike;
            if (system.max >= ST.SYSTEM_MAX_UPGARDE) return ST.Msg.system_is_fully_upgraded;
            if (ST.money < ST.Shipyard.upgradePrice[system.id]) return ST.Msg.not_enough_money;
            return ST.Msg.ok;
        };
        $scope.upgrade = function(system) {
            var result = $scope.getUpgradeStatus(system);
            if (result) { this._warning(result); }
            else {
                ST.Shipyard.upgrade(system);
                ST.startPlayerAction();
            }
        };
        $scope.upgradeTime = ST.Shipyard.getUpgradeTime();

        $scope.getBuySparepartStatus = function() {
            if (ST.EffectManager.hasEffect(ST.EFFECT.governor_day)) return ST.Msg.event_governor_day_no_service;
            if (ST.EffectManager.hasEffect(ST.EFFECT.civil_strike)) return ST.Msg.effect_civil_strike;
            if (ST.money < ST.SparepartStore.price) return ST.Msg.not_enough_money;
            if (ST.SparepartStore.quanity < 1) return ST.Msg.not_enough_spareparts;
            return ST.Msg.ok;
        };
        $scope.buySparepart = function() {
            var result = $scope.getBuySparepartStatus();
            if (result) { this._warning(result); }
            else {
                if (ST.EffectManager.hasEffect(ST.EFFECT.quarantine) && ST.currentEvent.hasInfection()) {
                    this._warning(ST.Msg.event_quarantine_infection);
                }
                ST.SparepartStore.buy();
                this._success("Sparepart has been bought");
            }
        };

        $scope.getBuyFuelStatus = function() {
            if (ST.EffectManager.hasEffect(ST.EFFECT.governor_day)) return ST.Msg.event_governor_day_no_service;
            if (ST.EffectManager.hasEffect(ST.EFFECT.civil_strike)) return ST.Msg.effect_civil_strike;
            if (ST.money < ST.FuelStore.price) return ST.Msg.not_enough_money;
            if (ST.FuelStore.quanity < 1) return ST.Msg.not_enough_fuel;
            return ST.Msg.ok;
        };
        $scope.buyFuel = function() {
            var result = $scope.getBuyFuelStatus();
            if (result) { this._warning(result); }
            else {
                if (ST.EffectManager.hasEffect(ST.EFFECT.quarantine) && ST.currentEvent.hasInfection()) {
                    this._warning(ST.Msg.event_quarantine_infection);
                }
                ST.FuelStore.buy(1);
                this._success("Fuel has been bought");
            }
        };

        $scope.getAcceptJobStatus = function(job) {
            if (ST.EffectManager.hasEffect(ST.EFFECT.labor_union_strike)) return ST.Msg.effect_labor_union_strike;
            if (ST.EffectManager.hasEffect(ST.EFFECT.urgent_harvest)) return ST.Msg.event_urgent_harvest;
            if (ST.jobs.getFreeCapacity() < job.size) return ST.Msg.not_enough_capacity;
            if ( !ST.hasLocationCargoGear()) {
                if (ST.cargogear.current < 1) return ST.Msg.no_cargo_gear;
            }
            return ST.Msg.ok;
        };
        $scope.acceptJob = function(job) {
            var result = $scope.getAcceptJobStatus(job);
            if (result) { this._warning(result); }
            else {
                ST.JobManager.addJob(job);
                ST.startPlayerAction();
            }
        };
        $scope.loadTime = ST.JobManager.getLoadTime();

        $scope.getPassengerEmbarkStatus = function(group) {
            if (ST.EffectManager.hasEffect(ST.EFFECT.civil_strike)) return ST.Msg.effect_civil_strike;
            if (ST.passengers.getFreeCapacity() < 1) return ST.Msg.not_enough_capacity;
            return ST.Msg.ok;
        };
        $scope.passengerEmbark = function(group) {
            var result = $scope.getPassengerEmbarkStatus(group);
            if (result) { this._warning(result); }
            else {
                if (ST.EffectManager.hasEffect(ST.EFFECT.quarantine) && ST.currentEvent.hasInfection()) {
                    this._warning(ST.Msg.event_quarantine_infection);
                }
                ST.PassengerTransport.embark(group, 1);
                this._success(ST.Msg.passenger_embark);
            }
        };

        $scope.getCrewHireStatus = function() {
            if (ST.EffectManager.hasEffect(ST.EFFECT.civil_strike)) return ST.Msg.effect_civil_strike;
            if (ST.crew.current >= ST.CREW_CAPACITY) return ST.Msg.no_more_room_for_crew;
            return ST.Msg.ok;
        };
        $scope.hire = function() {
            var result = $scope.getCrewHireStatus();
            if (result) { this._warning(result); }
            else {
                ST.CrewFind.hire();
                ST.startPlayerAction();
            }
        };

        $scope.getSouvenirBuyStatus = function(souvenir) {
            if (ST.EffectManager.hasEffect(ST.EFFECT.governor_day)) return ST.Msg.event_governor_day_no_service;
            if (ST.EffectManager.hasEffect(ST.EFFECT.civil_strike)) return ST.Msg.effect_civil_strike;
            if (ST.money < souvenir.price) return ST.Msg.not_enough_money;
            if (ST.souvenirs.getSum() >= ST.getSouvenirCapacity()) return ST.Msg.souvenir_capacity_full;
            return ST.Msg.ok;
        };
        $scope.buySouvenir = function(sv) {
            var result = $scope.getSouvenirBuyStatus(sv);
            if (result) { this._warning(result); }
            else {
                if (ST.EffectManager.hasEffect(ST.EFFECT.quarantine) && ST.currentEvent.hasInfection()) {
                    this._warning(ST.Msg.event_quarantine_infection);
                }
                ST.SouvenirsManager.buy(sv);
                this._success(ST.Msg.buy_souvenir);
            }
        };
    }
]);

ctrls.controller('MapController', ['$scope', 'ST',
    function($scope, ST) {
        ST.Travel.clear();

        $scope.hasDestination = function() { return ST.Travel.hasDestination(); };

        $scope.selectDestination = function(location) {
            ST.Travel.setDestination(location);
        };

        $scope.getTravelStatus = function() {
            if (ST.EffectManager.hasEffect(ST.EFFECT.quarantine)) return ST.Msg.event_quarantine;
            if (ST.EffectManager.hasEffect(ST.EFFECT.storm_2)) return ST.Msg.storm_2_no_travel;
            if (ST.fuel.current < 1) return ST.Msg.not_enough_fuel;
            if (!ST.Travel.hasDestination()) return ST.Msg.travel_no_destination;
            if (ST.currentLocation.id == ST.Travel.destination.id) return ST.Msg.same_location;
            if (ST.engine.current == 0 || ST.hull.current == 0) return ST.Msg.ship_system_broke;
            return ST.Msg.ok;
        };
        $scope.travel = function() {
            var result = $scope.getTravelStatus();
            if (result) { this._warning(result); }
            else {
                ST.Travel.travel();
                ST.startPlayerAction();
            }
        };

        $scope.speedControl = {
            overdrive: false,
            text: 'engine overdrive',
            setSpeed: function(newVal) {
                ST.currentSpeed = newVal;
                this.overdrive = ST.currentSpeed > ST.engine.getMaxSpeedGrade();
                if ($scope.hasDestination()) {
                    ST.Travel.calculateTravelDatas();
                }
            }
        };
        $scope.speedControl.setSpeed(ST.currentSpeed);

        $scope.locationFilter = function(loc) {
            if (ST.currentLocation == loc) return true;
            if (loc.isDeepspace()) return false;
            return true;
        };
    }
]);

ctrls.controller('LogController', ['$scope', 'ST',
    function($scope, ST) {
        $scope.advertisementEvent = ST.AdvertisementEvent.isValid;
        $scope.environmentTax = ST.EffectManager.hasEffect(ST.EFFECT.enviroment_protection_tax);
        $scope.logFormat = function(log) {
            // var gt = ST.Utils.turnToGametime(log.turn);
            // return gt.day + "d " + gt.hour + "h: " + log.msg;
            return (ST.getFormattedGameDate(log.date) + ": " + log.msg);
        };
        $scope.repay = function() {
            if (confirm("Ezzel befejezed a jatekot!\nBiztos?")) {
                ST.repay();
                ST.endGame();
                if (ST.state == ST.STATE.Win) ST.Statemanager.showWin();
                else ST.Statemanager.showLose();
            }
        }
    }
]);

ctrls.controller('TimeController', ['$scope', 'ST', '$timeout',
    function($scope, ST, $timeout) {
        $scope.close = function() {
            ST.Logbook.clearRecent();
            ST.Logbook.clearOld();
            ST.startPlayerTurn();
        };
        $scope.closeButtonVisible = false;

        $scope.messages = [];

        let process = function() {
            ST.Scheduler.nextAction();
            while(ST.Logbook.recents.length) {
                let log = ST.Logbook.recents.shift();
                // let gt = ST.Utils.turnToGametime(log.turn);
                // $scope.messages.push(gt.day + "d " + gt.hour + "h: " + log.msg);
                let d = ST.getFormattedGameDate(log.date);
                $scope.messages.push(d + ": " + log.msg);

            }
            if (ST.Scheduler.isRunning) $timeout(function() { process(); }, 700);
            else {
                $scope.closeButtonVisible = true;
            }
        }
        $timeout(function() { process(); }, 200);
    }
]);

ctrls.controller('TimeController_regi', ['$scope', 'ST', '$timeout',
    function($scope, ST, $timeout) {
        $scope.closeModal = function() {
            ST.Logbook.clearRecent();
            //  regi
            // this.playerFinishAction();
            ST.startPlayerTurn();
        };
        $scope.closeVisible = false;
        $scope.$watch('ST.isPlayerActive', function(newVal, oldVal) {
            if (newVal == true) {
                $scope.writeMessage();
            }
        });

        $scope.messages = [];
        $scope.writeMessage = function() {
            if (ST.Logbook.recents.length > 0) {
                let log = ST.Logbook.recents.shift();
                let gt = ST.Utils.turnToGametime(log.turn);
                $scope.messages.push(gt.day + "d " + gt.hour + "h: " + log.msg);
            }
            if (ST.Logbook.recents.length > 0) {
                $timeout($scope.writeMessage, 700);
            }
            else
            {
                $scope.closeVisible = true;
            }
        };
    }
]);

ctrls.controller('EventCorrputPortBossController', ['$scope', 'ST',
    function($scope, ST) {
        let end = function() {
            ST.removeEvent();
            ST.Statemanager.prevState = "map";
            ST.startPlayerTurn();
        };

        $scope.price = ST.Utils.roll(5, 20);

        $scope.pay = function() {
            ST.money -= $scope.price;
            end();
        };
        $scope.notpay = function() {
            ST.Travel.forceTravel( ST.getClosestDeepspace(ST.currentLocation) );
            end();
        };
    }
]);

ctrls.controller('EventHardWorkerSailorController', ['$scope', 'ST',
    function($scope, ST) {
        let end = function() {
            ST.removeEvent();
            ST.Statemanager.prevState = "map";
            ST.startPlayerTurn();
        };

        $scope.pay = function() {
            ST.money -= 50;
            end();
        };
        $scope.letgo = function() {
            ST.crew.current -= 1;
            ST.addToLogbook(ST.Msg.event_hard_worker_sailor_left);
            end();
        };
    }
]);

ctrls.controller('EventWildPartyController', ['$scope', 'ST',
    function($scope, ST) {
        let end = function() {
            ST.removeEvent();
            ST.Statemanager.prevState = "map";
            ST.startPlayerTurn();
        };

        $scope.arrestedCrew = 2;
        if (ST.crew.current < $scope.arrestedCrew) {
            $scope.arrestedCrew = 1;
        }
        $scope.fine = ST.WILD_PARTY_FINE * $scope.arrestedCrew;

        $scope.pay = function() {
            ST.money -= $scope.fine;
            end();
        };
        $scope.notpay = function() {
            ST.crew.current -= $scope.arrestedCrew;
            end();
        };
    }
]);

ctrls.controller('EventContrabandController', ['$scope', 'ST',
    function($scope, ST) {
        let end = function() {
            ST.removeEvent();
            ST.Statemanager.prevState = "map";
            ST.startPlayerTurn();
        };

        $scope.fine = 15 + ST.Utils.roll(1, 5) * 5;

        $scope.pay = function() {
            ST.money -= $scope.fine;
            end();
        };
        $scope.notpay = function() {
            ST.Travel.forceTravel( ST.getClosestDeepspace(ST.currentLocation) );
            //this.warning("")
            end();
        };
    }
]);

ctrls.controller('EventWreckTractionController', ['$scope', 'ST',
    function($scope, ST) {
        let end = function(result) {
            ST.removeEvent();
            if (result) {
                ST.Statemanager.reset();
                ST.startPlayerAction();
            }
            else {
                ST.Statemanager.prevState = "map";
                ST.startPlayerTurn();
            }
        };

        $scope.takeOn = function() {
            ST.fuel.current -= 10;
            ST.money += 130;
            ST.ActionManager.set(ST.ACTION_WRECK_TRACTION, 12);
            ST.addToLogbook(ST.Msg.action_wreck_traction);

            if (ST.Utils.roll(1, 6) < ST.crew.current) {
                ST.hull.current -= 1;
                ST.addToLogbook(ST.Msg.event_wreck_traction_accident);
            }

            end(true);
        };
        $scope.refuse = function() { end(false); };
    }
]);

ctrls.controller('EventAdvertisementController', ['$scope', 'ST',
    function($scope, ST) {
        let end = function() {
            ST.removeEvent();
            ST.Statemanager.prevState = "map";
            ST.startPlayerTurn();
        };

        $scope.takeOn = function() {
            ST.AdvertisementEvent.create(ST.turn);
            end();
        };
        $scope.refuse = function() { end(); };
    }
]);
