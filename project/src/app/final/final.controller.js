(function() {
  'use strict';

	function FinalCtrl($location, searchConfig, cocktailSearch) {
		var vm = this;
		vm.value = '';
		vm.searchConfig = searchConfig;
		vm.cocktailSearch = cocktailSearch;

		vm.save = function(value) {
			searchConfig.ingredient = value;
			cocktailSearch.getCocktail();
		};

		/*vm.Detail = function(){
			$location.path('/cocktailDetail');
		};*/
	}
	
	FinalCtrl.$inject = ['$location', 'searchConfig', 'cocktailSearch'];
	angular.module('daproject')
    .controller('FinalCtrl', FinalCtrl);

})();