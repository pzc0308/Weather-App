(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('weatherController', weatherController);

    weatherController.$inject = [];

    /* @ngInject */
    function weatherController() {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
