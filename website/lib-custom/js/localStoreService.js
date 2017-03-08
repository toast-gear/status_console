(function () {
    angular
        .module('statusApp')
        .service('localStoreService', localStoreService);

    localStoreService.$inject = ['$log', 'localStorageService'];

    function localStoreService($log, localStorageService) {
        var localStoreService = {
            testService: testService,
            getLocalStorageKeyValue: getLocalStorageKeyValue
        };

        return localStoreService;

        function testService() {
            $log.debug('localStoreService - testService ran!');
        }

        function getLocalStorageKeyValue(key) {
            return localStorageService.get(key);
        }
    }
})();
