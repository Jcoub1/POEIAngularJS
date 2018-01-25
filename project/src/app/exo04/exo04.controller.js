(function() {
  'use strict';

	function Exo04Ctrl(settingService, meteoService, $location) {
		var vm = this;
		vm.value = '';
		vm.settingService = settingService;
		vm.meteoService = meteoService;

		vm.console = function(value) {
			settingService.city = value;
			meteoService.getMeteo();
		};

		vm.more = function(){
			$location.path('/more');
		};
	}
	
	Exo04Ctrl.$inject = ['settingService', 'meteoService', '$location'];
	angular.module('daproject')
    .controller('Exo04Ctrl', Exo04Ctrl);
})();