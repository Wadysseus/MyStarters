angular.module('KittyCrawler', [])
console.log("Initializing systems, human.")




angular.module('KittyCrawler', ['ngRoute']);

// Routes //

angular.module('KittyCrawler').config(function($routeProvider) {
    $routeProvider.when( '/', {
      templateUrl: 'game/start.html'
    });
    $routeProvider.when( '/dungeon.html', {
      templateUrl: 'game/dungeon.html'
    })

    // default route //
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
});