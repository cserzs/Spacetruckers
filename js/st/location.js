ST.Location = class {
    constructor(locationTemplate) {
        this.id = locationTemplate.id;
        this.code = locationTemplate.code;
        this.name = locationTemplate.name;
        this.shortDesc = locationTemplate.shortDesc;
        this.population = locationTemplate.population;
        this.portLevel = locationTemplate.portLevel;
        this.planet_type = locationTemplate.planet_type;
        this.type = locationTemplate.type;
    
        this.effects = [];
        for(let i = 0; i < locationTemplate.effects.length; i++) {
            this.effects.push(locationTemplate.effects[i]);
        }
    
        this.eventexception = [];
        for(let i = 0; i < locationTemplate.eventexception.length; i++) {
            this.eventexception.push(locationTemplate.eventexception[i]);
        }
    
        this.cargoDest = locationTemplate.cargoDest;
    
        this.coord = -1;
        this.cargos = [];
    }
    isDeepspace() { return this.code == ST.DEEPSPACE; }
    removeEffects() {
        for(let i = 0; i < this.effects.length; i++) {
            ST.EffectManager.removeEffect(this.effects[i]);
        }
    }
    addEffects() {
        for(let i = 0; i < this.effects.length; i++) {
            ST.EffectManager.addEffect(this.effects[i]);
        }
    }
}
