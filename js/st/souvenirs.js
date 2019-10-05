ST.SouvenirsManager = {
    souvenirs: [],
    available: [],
    init: function() {
        for(let i = 0; i < ST.GameTables.souvenirs.length; i++) {
            this.souvenirs.push(new ST.Souvenir(ST.GameTables.souvenirs[i].id, ST.GameTables.souvenirs[i].priceRange, ST.GameTables.souvenirs[i].name));
        }
        this.available = [];
    },
    update: function() {
        for(let i = 0; i < this.souvenirs.length; i++) {
            this.souvenirs[i].price = ST.Utils.roll(this.souvenirs[i].minPrice, this.souvenirs[i].maxPrice);
            if (ST.EffectManager.hasEffect(ST.EFFECT.TOURIST_PARADISE))
            {
                this.souvenirs[i].price += 5;
            }
            this.souvenirs[i].available = false;
        }
        this.available = [];
        for(let i = 0; i < 2; i++) {
            let index = ST.Utils.roll(0, this.souvenirs.length - 1);
            if ( !this.souvenirs[index].available) {
                this.available.push(this.souvenirs[index]);
                this.souvenirs[index].available = true;
            }
        }
    },
    buy: function(sv) {
        ST.souvenirs.add(sv);
        ST.money -= sv.price;
    },
    sell: function(sv) {
        ST.souvenirs.remove(sv);
        let s = this.get(sv.id);
        ST.money += s.price;
    },
    get: function(souvenirId) {
        for(let i = 0; i < this.souvenirs.length; i++) {
            if (this.souvenirs[i].id == souvenirId) return this.souvenirs[i];
        }
        throw new Error("ST.SouvenirsManager.get: unknown souvenir id: " + souvenirId);
    },
    getRandomSouvenir: function() {
        let index = ST.Utils.roll(0, this.souvenirs.length - 1);
        return this.souvenirs[index];
    }
};

ST.Souvenir = class {
    constructor(id, priceRange, name) {
        this.id = id;
        this.priceRange = priceRange;
        this.minPrice = priceRange[0];
        this.maxPrice = priceRange[1];
        this.name = name;
        this.price = this.minPrice;
        this.available = false;
        this.num = 1;
    }
}