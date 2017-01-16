(function () {
    angular.module('statusApp')
        .controller('metricsController', function ($rootScope, $location, localStorageService) {
            $rootScope.lastUpdateDateTime = '2016-10-21 13:00'
            $rootScope.enableNavBar = true;
            if (localStorageService.isSupported !== true) {
                console.log('YOUR BROWSER SUCKS GET A NEWER ONE, NEED TO IMPLEMENT SOME SORT OF PAGE / CONTROL DISABLE FOR THIS');
                $rootScope.supportedBrowser = false;
            }
            else {
                localStorageService.set('isAuthenticated', true);
                console.log('Metrics controller entered')
                };
        });
})();