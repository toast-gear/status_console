(function () {
    angular.module('statusApp')
        .controller('statusController', function ($rootScope, $scope, $location, $http, $log, localStorageService, metaService, databaseService, localStoreService) {
            $log.info('Status controller entered');
            var baseUrl = '';
                        
            if (localStoreService.getLocalStorageKeyValue('sessionStart') === null) {
                $log.info('Setting local storage session data');
                localStorageService.set('sessionStart', new Date());
            }
            if (localStoreService.getLocalStorageKeyValue('numberOfStatusStreamDays') === null) {
                $log.info('No status stream days found in session, setting to default');
                localStorageService.set('numberOfStatusStreamDays', 30);
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
            $log.info(localStoreService.getLocalStorageKeyValue('numberOfStatusStreamDays'));
            databaseService.getStatusStreamMessages(baseUrl + '/api/database/getstatusstreammessages' + '?NumberOfDays=' + localStoreService.getLocalStorageKeyValue('numberOfStatusStreamDays'))
                .then(function (response) {
                    $log.info('response date : ', response);
                    $rootScope.streamData = response.data;
                })
                .catch(function (response) {
                    $log.error('Exception on GET request');
                    $log.error(response);
                });

            $scope.loadMoreDays = function () {
                $log.info('loadMoreDays event entered')
                    var currentValue = localStoreService.getLocalStorageKeyValue('numberOfStatusStreamDays')
                    localStorageService.set('numberOfStatusStreamDays', currentValue + 30);
                    databaseService.getStatusStreamMessages(baseUrl + '/api/database/getstatusstreammessages' + '?NumberOfDays=' + localStoreService.getLocalStorageKeyValue('numberOfStatusStreamDays'))
                                    .then(function (response) {
                                        $log.info('response date : ', response);
                                        $rootScope.streamData = response.data;
                                    })
            }
            $scope.loadFewerDays = function () {
                $log.info('loadFewerDays event entered')
                if (localStoreService.getLocalStorageKeyValue('numberOfStatusStreamDays') > 0) {
                    var currentValue = localStoreService.getLocalStorageKeyValue('numberOfStatusStreamDays')
                    localStorageService.set('numberOfStatusStreamDays', currentValue - 30);
                    databaseService.getStatusStreamMessages(baseUrl + '/api/database/getstatusstreammessages' + '?NumberOfDays=' + localStoreService.getLocalStorageKeyValue('numberOfStatusStreamDays'))
                                    .then(function (response) {
                                        $log.info('response date : ', response);
                                        $rootScope.streamData = response.data;
                                    })
                }
            }
        });
})();
