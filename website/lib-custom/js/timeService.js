(function () {
    angular
        .module('statusApp')
        .service('timeService', timeService);

    timeService.$inject = ['$http', '$log'];

    function timeService($http, $log) {
        var timeService = {
            testService: testService,
            getLastStreamUpdateTime: getLastStreamUpdateTime
        };

        return timeService;

        function testService() {
            $log.debug('timeService - testService ran!');
        }

        function getLastStreamUpdateTime() {
            return $http.post('')
                .then(function (result) {
                    return result;
                });
        }
    }
})();
