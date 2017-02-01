(function () {
    angular.module('statusApp')
        .controller('metricsController', function ($rootScope, $location, $log, localStorageService) {
            $log.info('Metrics controller entered');
            if (localStorageService.sessionStart !== null) {
                $log.info(new Date());
                localStorageService.set('sessionStart', new Date());
            }
        });
})();