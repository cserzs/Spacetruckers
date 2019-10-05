ST.SparepartStore = {
    quanity: 0,
    price: 1,
    buy: function() {
        ST.spareparts.current += 1;
        this.quanity -= 1;
        ST.money -= this.price;
        console.log('Buying sparepart!');
        return 0;
    },
    update: function() {
        var roll = ST.Utils.roll(1, 6);
        this.quanity = ST.GameTables.spareparts[ST.currentLocation.portLevel][roll - 1].q;
        this.price = ST.GameTables.spareparts[ST.currentLocation.portLevel][roll - 1].p;

        if (ST.EffectManager.hasEffect(ST.EFFECT.ALWAYS_SPAREPART)) {
            if (this.quanity < 2) this.quanity = 2;
            this.price = 5;
        }
        if (ST.EffectManager.hasEffect(ST.EFFECT.NO_SPAREPART)) {
            this.quanity = 0;
        }
        if (ST.EffectManager.hasEffect(ST.EFFECT.CONST_SPAREPART_PRICE)) {
            this.price = 5;
        }
    }
};