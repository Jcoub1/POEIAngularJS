(function() {
  'use strict';

	function CocktailDetailCtrl($location, cocktailSearch) {
		var vm = this;
		vm.cocktailSearch = cocktailSearch;
	}
	
	CocktailDetailCtrl.$inject = ['$location', 'cocktailSearch'];
	angular.module('daproject')
    .controller('CocktailDetailCtrl', CocktailDetailCtrl);

})();