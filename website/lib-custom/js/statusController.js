(function () {
    angular.module('statusApp')
        .controller('statusController', function ($rootScope, $location, $http, $log, localStorageService, metaService) {
            $log.debug('Status controller entered');
            var baseUrl = ''
            if (localStorageService.sessionStart !== null) {
                $log.debug('Setting local storage');
                localStorageService.set('sessionStart', new Date());
            }

            metaService.getLastStreamUpdateTime(baseUrl + '/prod/api/meta/localservertime')
                .then(function(response) {
                    $log.info('response date', response);
                    $rootScope.metricsLastUpdateDateTime = response.data;
                })
                .catch(function (response) {
                    $log.error('Exception on GET request');
                    $log.error(response);
                    $rootScope.metricsLastUpdateDateTime = 'ERROR';
                });
        });
})();