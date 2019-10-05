ST.Utils = {
    turnToDay: function(turn) {
        return Math.floor(turn / 24) + 1;
    },

    turnToGametime: function(turn) {
        return {
            day: Math.floor(turn / 24) + 1,
            hour: turn % 24
        };
    },

    turnToDuration: function(turn) {
        return {
            day: Math.floor(turn / 24),
            hour: turn % 24
        }
    },

    hourToGametime: function(h) {
        return {
            day: Math.floor(h / 24),
            hour: h % 24
        };
    },

    //  beleveszi a min es max erteket is
    roll: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    shuffleArray: function(arr) {
        var j, x;
        for(var i = arr.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = arr[i - 1];
            arr[i - 1] = arr[j];
            arr[j] = x;
        }
        return arr;
    },

    getRandomArrayElement: function(arr) {
        var l = arr.length;
        if (l == 0) throw new Error("ST._getRandomArrayElement: ures tomb!");
        if (l == 1) return arr[0];
        var n = ST.Utils.roll(0, l - 1);
        return arr[n];
    },

    changeLocations: function(arr, loc1, loc2) {
        var loc1Index = arr.indexOf(loc1);
        var loc2Index = arr.indexOf(loc2);

        var temp = loc1.coord;
        loc1.coord = loc2.coord;
        loc2.coord = temp;

        temp = arr[loc1Index];
        arr[loc1Index] = arr[loc2Index];
        arr[loc2Index] = temp;
    }

};