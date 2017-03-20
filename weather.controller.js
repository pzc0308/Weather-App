(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('weatherController', weatherController);

    weatherController.$inject = ['$http'];

    /* @ngInject */
    function weatherController($http) {
        var vm = this;
        vm.history = [];
        vm.search = '';

    vm.getInfo = function (search){
      $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + search + '&units=imperial&appID=519889fb71f27909ea9936375edcae8f')
      .then(function(response){
        vm.weather = response.data

        vm.history.push({
              name: response.data.name,
              timestamp: new Date()

        })

      });

    }


    }
})();
