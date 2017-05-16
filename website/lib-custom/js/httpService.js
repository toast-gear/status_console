(function () {
    angular
        .module('statusApp')
        .service('httpService', httpService);

    httpService.$inject = ['$http', '$log'];

    var baseUrl = '';

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
            return $http.get(baseUrl + url)
                .then(function (result) {
                    return result;
                })
                .catch(function (response) {
                    $log.error('Exception on GET request');
                    $log.error(baseUrl + url);
                    $log.error(response);
                });
        }
    }
})();
