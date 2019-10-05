var app = angular.module('SpaceTruckersApp', ['ngSanitize',
     'angular-growl', 'ui.bootstrap-slider',
    'SpaceTruckersApp.Controllers', 'SpaceTruckersApp.Services']);

app.config(['growlProvider',
function(growlProvider) {

    growlProvider.globalTimeToLive(3000);
    growlProvider.globalReversedOrder(true);
    growlProvider.globalDisableCountDown(true);
    growlProvider.globalPosition('bottom-center');
    growlProvider.onlyUniqueMessages(false);
}]);

app.filter('turnToDuration', function() {
    return function(input) {
        if(isNaN(input)) { return input; }
        var day = Math.floor(input / 24);
        var hour = input % 24;
        return day + " nap es " + hour + " ora";
    };
});
app.filter('turnToGamedate', function() {
    return function(input) {
        return ST.turnToGamedate(input);
    };
});
app.filter('gametimeDay', function() {
    return function(input) {
        if(isNaN(input)) { return input; }
        var day = Math.floor(input / 24) + 1;
        return day + " day";
    };
});
app.filter('gametime', function() {
    return function(input) {
        return ST.getFormattedGameDate(input);
    };
});