(function() {
  'use strict';

	function DetailCtrl($location) {
		var vm = this;
		vm.cacherDetail = false;
		vm.detailH = detailH;
		
		function detailH() {
			if (vm.cacherDetail === false) {
				vm.cacherDetail = true;
			} else {
				vm.cacherDetail = false;
			}
		}
	}

	DetailCtrl.$inject = ['$location'];
	angular.module('daproject')
	.controller('DetailCtrl', DetailCtrl);
})();