ST.FuelStore = {
    quanity: 0,
    price: 1,
    update: function() {
        let roll = ST.Utils.roll(1, 6);
        this.quanity = ST.GameTables.fuels[ST.currentLocation.portLevel][roll - 1].q;
        this.price = ST.GameTables.fuels[ST.currentLocation.portLevel][roll - 1].p;
    },
    buy: function(amount) {
        ST.fuel.current += amount;
        this.quanity -= amount;
        ST.money -= amount * this.price;
        //console.log('Buying fuel!');
        return 0;
    }
};