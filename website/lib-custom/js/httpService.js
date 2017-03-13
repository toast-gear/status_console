(function () {
    angular
        .module('statusApp')
        .service('httpService', httpService);

    httpService.$inject = ['$http', '$log'];

    function httpService($http, $log) {
        var httpService = {
            testService: testService,
            invokeHttpGetRequest: invokeHttpGetRequest
        };

        return httpService;

        function testService() {
            $log.debug('httpService - testService ran!');
        }

        function invokeHttpGetRequest(url) {
            return $http.get(url)
                .then(function (result) {
                    return result;
                });
        }
    }
})();
