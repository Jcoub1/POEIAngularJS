(function() {
  'use strict';

  angular.module('daproject', [
    'ui.bootstrap',
    'ngRoute',
    'ngAnimate'
  ]);

  angular.module('daproject')
    .config(AppConfig);

  angular.module('daproject')
    .run(RunUtils);

  function AppConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/app/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home',
      })
      .otherwise({redirectTo:'/'})
      .when('/exo03', {
        templateUrl: 'src/app/exo03/exo03.html',
        controller: 'Exo03Ctrl',
        controllerAs: 'exo03'
      })
      .when('/final', {
        templateUrl: 'src/app/final/final.html',
        controller: 'FinalCtrl',
        controllerAs: 'Final'
      })
      .when('/exo04', {
        templateUrl: 'src/app/exo04/exo04.html',
        controller: 'Exo04Ctrl',
        controllerAs: 'exo04'
      })
      .when('/more', {
        templateUrl: 'src/app/more/more.html',
        controller: 'MoreCtrl',
        controllerAs: 'more'
      })
      .when('/cocktailDetail', {
        templateUrl: 'src/app/cocktailDetail/cocktailDetail.html',
        controller: 'CocktailDetailCtrl',
        controllerAs: 'CocktailDetail'
      });
  }

  function RunUtils($rootScope) {
    $rootScope.safeApply = function(fn) {
      var phase = $rootScope.$$phase;
      if (phase === '$apply' || phase === '$digest') {
        if (fn && (typeof(fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };
  }

})();
