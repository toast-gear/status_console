(function () {
    angular
        .module('statusApp')
        .service('databaseService', databaseService);

    databaseService.$inject = ['$http', '$log'];

    function databaseService($http, $log) {
        var databaseService = {
            testService: testService,
            getStatusStreamMessages: getStatusStreamMessages
        };

        return databaseService;

        function testService() {
            $log.debug('databaseService - testService ran!');
        }

        function getStatusStreamMessages(url) {
            return $http.get(url)
                .then(function (result) {
                    return result;
                });
        }
    }
})();
