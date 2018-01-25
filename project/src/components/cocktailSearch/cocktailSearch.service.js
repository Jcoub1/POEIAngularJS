(function() {
    'use strict';
  
    function cocktailSearch($http, searchConfig, $location) {
      var service = {};
      service.cocktailList = [];
      service.cocktailDetails = {};

	  service.getCocktail = function(){
	  return $http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + searchConfig.ingredient)
        .then(function(response){
            console.log('Success: %o', response);
            service.cocktailList = response.data.drinks;
        })
        .catch(function(error){
		  console.log('Error: %o', error);
          service.cocktailList = [];
        });
      };

    service.getCocktailDetails = function(cocktailId){
    return $http.get('http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + cocktailId)
        .then(function(response){
            console.log('Success: %o', response);
            service.cocktailDetails = response.data.drinks[0];
            $location.path('/cocktailDetail');
        })
        .catch(function(error){
          console.log('Error: %o', error);
          service.cocktailDetails = {};
        });
      };

      return service;
    }

    cocktailSearch.$inject = ['$http', 'searchConfig', '$location'];
    
    angular.module('daproject')
        .factory('cocktailSearch', cocktailSearch);
  
})();