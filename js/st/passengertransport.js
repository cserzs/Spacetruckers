ST.PassengerGroup = class {
    constructor(start, destination, num, turn) {
        this.startLocation = start;
        this.destination = destination;
        this.num = num;
        this.departureTurn = turn;
    }
};

ST.PassengerTransport = {
    groups: [],

    update: function() {
        this.groups = [];

        let destinationNum = ST.Utils.roll(0, ST.currentLocation.portLevel);
        if (destinationNum == 0) return;
        let exceptionList = [];
        exceptionList.push(ST.currentLocation);
        let destination, distance, num, priceCategory;
        for(let i = 0; i < destinationNum; i++) {
            destination = ST.getRandomLocation(exceptionList);
            distance = ST.getDistance(ST.currentLocation, destination);
            num = ST.Utils.roll(1, 6);
            priceCategory = Math.floor(distance / 4) + 1;
            this.groups.push(new ST.PassengerGroup(ST.currentLocation, destination, num, ST.turn));
            exceptionList.push(destination);
        }
    },
    hasPassengers: function() { return this.groups.length > 0; },
    shiparrive: function() {
        //  ha vannak utasok az aktualis kikotobe
        //      fizettseg szamitas
        //      utasokat kivenni
        //      log
        let payment = 0;
        let payed = 0;
        let notpayed = 0;
        let wasGroup = false;
        let group, distance;
        while(group = ST.passengers.getGroupTo(ST.currentLocation)) {
            wasGroup = true;
            if (ST.turn - group.departureTurn >= ST.GameTables.passengersLateLimit) {
                //  no payment
                notpayed += group.num;
            }
            else {
                payed += group.num;
                distance = ST.getDistance(group.startLocation, group.destination);
                payment += group.num * distance * ST.PassengerPricePerDistance;
            }
            ST.passengers.remove(group);
        }
        if (wasGroup) {
            //  10 passenger(s) leave the ship, they payed 12 credit
            //  10 passenger(s) leave the ship, 2 passenger(s) don't pay because late, payment: 12 credit
            if (notpayed > 0) {
                let sum = payed + notpayed;
                // let tb1 = sum > 1 ? 's': '';
                // let tb2 = notpayed > 1 ? 's': '';
                // ST.addToLogbook(ST.Msg.passengers_leave_no_pay, [sum, tb1, notpayed, tb2, payment]);
                ST.addToLogbook(ST.Msg.passengers_leave_no_pay, [sum, notpayed, payment]);
            }
            else {
                // let tb = payed > 1 ? 's': '';
                ST.addToLogbook(ST.Msg.passengers_leave, [payed, payment]);
            }
        }
    },
    embark: function(group, num) {
        ST.passengers.add(group, num);
        group.num -= num;
        if (group.num < 1) {
            let index = this.groups.indexOf(group);
            if (index > -1) {
                this.groups.splice(index, 1);
            }
        }
        return 0;
    }
};