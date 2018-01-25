(function() {
    'use strict';
  
    function meteoService($http, settingService) {
      var service = {};
      service.settingService = settingService;
      service.meteoListe = [];

    service.getMeteo = function(){
      return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + settingService.city +
                        '&APPID=7c545b61b7c525dcbd8e14ed4d682cac&units=metric')
            .then(function(response){
                console.log('Success: %o', response);
                service.meteoListe = response.data.list;
            })
            .catch(function(error){
                console.log('Error: %o', error);
                service.meteoListe = [];
            });
      };

      return service;
    }

    meteoService.$inject = ['$http', 'settingService'];
    
    angular.module('daproject')
        .factory('meteoService', meteoService);
  
})();