(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('weatherController', weatherController);

    weatherController.$inject = [];

    /* @ngInject */
    function weatherController() {
        var vm = this;
        vm.history = [];
        vm.apiKey =  '519889fb71f27909ea9936375edcae8f'
        vm.search = '';
      

        function activate() {

        }
    }
})();
