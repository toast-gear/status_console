(function () {
    angular.module('statusApp')
        .controller('statusController', function ($rootScope, $location, $http, $log, localStorageService, timeService) {
            $log.debug('Status controller entered')
            if (localStorageService.sessionStart !== null) {
                $log.debug('Setting local storage')
                localStorageService.set('sessionStart', new Date())
            }

            timeService.getLastStreamUpdateTime()
                .then(function(reponse) {
                    $log.info('reponse date', data)
                    $rootScope.metricsLastUpdateDateTime = data
                })
                .catch(function (data) {
                    $log.error('time function failed to load')
                    $rootScope.metricsLastUpdateDateTime = 'UNKNOWN'
                });
        });
})();