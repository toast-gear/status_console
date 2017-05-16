(function () {
    angular.module('statusApp')
        .controller('statusController', function ($rootScope, $scope, $location, $http, $log, localStorageService, httpService, localStoreService) {
            if (localStoreService.getLocalStorageKeyValue('sessionStart') === null) {
                $log.info('Setting local storage session data');
                localStorageService.set('sessionStart', new Date());
            }
            if (localStoreService.getLocalStorageKeyValue('numberOfStatusStreamDays') === null) {
                $log.info('No status stream days found in session, setting to default');
                localStorageService.set('numberOfStatusStreamDays', 30);
            }
            httpService.invokeHttpGetRequest('/api/meta/getlocalservertime')
                .then(function (response) {
                    $log.info('getlocalservertime');
                    $log.info('response date : ', response);
                    $rootScope.metricsLastUpdateDateTime = response.data;
                })
            httpService.invokeHttpGetRequest('/api/statusstream/getlateststatusmessage')
                .then(function (response) {
                    $log.info('getlateststatusmessage');
                    $log.info('response date : ', response);
                    $rootScope.currentStatus = response.data;
                })
            httpService.invokeHttpGetRequest('/api/statusstream/getstatusstreammessages' + '?NumberOfDays=' + localStoreService.getLocalStorageKeyValue('numberOfStatusStreamDays'))
                .then(function (response) {
                    $log.info('getstatusstreammessages');
                    $log.info('response date : ', response);
                    $rootScope.streamData = response.data;
                })
            $scope.loadMoreDays = function () {
                $log.info('loadMoreDays event entered');
                var currentValue = localStoreService.getLocalStorageKeyValue('numberOfStatusStreamDays');
                localStorageService.set('numberOfStatusStreamDays', currentValue + 30);
                httpService.invokeHttpGetRequest('/api/statusstream/getstatusstreammessages' + '?NumberOfDays=' + localStoreService.getLocalStorageKeyValue('numberOfStatusStreamDays'))
                                .then(function (response) {
                                    $log.info('response date : ', response);
                                    $rootScope.streamData = response.data;
                                });
            };
            $scope.loadFewerDays = function () {
                $log.info('loadFewerDays event entered');
                if (localStoreService.getLocalStorageKeyValue('numberOfStatusStreamDays') - 30 > 0) {
                    var currentValue = localStoreService.getLocalStorageKeyValue('numberOfStatusStreamDays');
                    localStorageService.set('numberOfStatusStreamDays', currentValue - 30);
                }
                else {
                    localStorageService.set('numberOfStatusStreamDays', 0);
                }
                httpService.invokeHttpGetRequest('/api/statusstream/getstatusstreammessages' + '?NumberOfDays=' + localStoreService.getLocalStorageKeyValue('numberOfStatusStreamDays'))
                    .then(function (response) {
                        $log.info('response date : ', response);
                        $rootScope.streamData = response.data;
                    });
            };
        });
})();
