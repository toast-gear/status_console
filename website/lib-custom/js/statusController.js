(function () {
    angular.module('statusApp')
        .controller('statusController', function ($rootScope, $location, $http, $log, localStorageService, metaService, databaseService) {
            $log.debug('Status controller entered');
            var baseUrl = 'https://5u75tpzaef.execute-api.eu-west-1.amazonaws.com/prod';
            //var baseUrl = 'http://lion-api.localhost.co.uk';
            
            if (localStorageService.sessionStart !== null) {
                $log.debug('Setting local storage');
                localStorageService.set('sessionStart', new Date());
            }

            metaService.getLastStreamUpdateTime(baseUrl + '/api/meta/getlocalservertime')
                .then(function(response) {
                    $log.info('response date', response);
                    $rootScope.metricsLastUpdateDateTime = response.data;
                })
                .catch(function (response) {
                    $log.error('Exception on GET request');
                    $log.error(response);
                    $rootScope.metricsLastUpdateDateTime = 'ERROR';
                });
            databaseService.getStatusStreamMessages(baseUrl + '/api/database/getstatusstreammessages')
                .then(function (response) {
                    $log.info('response data', response);
                    $rootScope.streamData = response.data;
                })
                .catch(function (response) {
                    $log.error('Exception on GET request');
                    $log.error(response);
                });
        });
})();