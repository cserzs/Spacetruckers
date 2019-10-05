
ST.EffectManager = {
    activeEffects: [],
    init: function() {
        this.activeEffects = [];
    },
    addEffect: function(effectId) {
        var index = this.activeEffects.indexOf(effectId);
        if (index < 0) {
            this.activeEffects.push(effectId);
        }
    },
    removeEffect: function(effectId) {
        var index = this.activeEffects.indexOf(effectId);
        if (index > -1) {
            this.activeEffects.splice(index, 1);
        }
    },
    hasEffect: function(effectId) {
        return this.activeEffects.indexOf(effectId) > -1;
    }
};