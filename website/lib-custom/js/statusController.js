(function () {
    angular.module('statusApp')
        .controller('statusController', function ($rootScope, $location, $http, $log, localStorageService, metaService, databaseService) {
            $log.info('Status controller entered');
            var baseUrl = '';
            
            if (localStorageService.sessionStart !== null) {
                $log.info('Setting local storage session data');
                localStorageService.set('sessionStart', new Date());
            }

            metaService.getLastStreamUpdateTime(baseUrl + '/api/meta/getlocalservertime')
                .then(function(response) {
                    $log.info('response date : ', response);
                    $rootScope.metricsLastUpdateDateTime = response.data;
                })
                .catch(function (response) {
                    $log.error('Exception on GET request');
                    $log.error(response);
                    $rootScope.metricsLastUpdateDateTime = 'ERROR';
                });
            databaseService.getStatusStreamMessages(baseUrl + '/api/database/getstatusstreammessages')
                .then(function (response) {
                    $log.info('response date : ', response);
                    $rootScope.streamData = response.data;
                })
                .catch(function (response) {
                    $log.error('Exception on GET request');
                    $log.error(response);
                });
        });
})();