(function () {
    angular
        .module('statusApp')
        .service('metaService', metaService);

    metaService.$inject = ['$http', '$log'];

    function metaService($http, $log) {
        var metaService = {
            testService: testService,
            getLastStreamUpdateTime: getLastStreamUpdateTime
        };

        return metaService;

        function testService() {
            $log.debug('metaService - testService ran!');
        }

        function getLastStreamUpdateTime(url) {
            return $http.get(url)
                .then(function (result) {
                    return result;
                });
        }
    }
})();
