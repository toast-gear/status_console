(function () {
    angular.module('statusApp')
        .controller('ideasController', function ($rootScope, $scope, $location, $log, httpService, localStorageService, localStoreService) {
            if (localStorageService.sessionStart !== null) {
                $log.info(new Date());
                localStorageService.set('sessionStart', new Date());
            }

            $scope.data = {
                filterOptionsModel: [
                    { id: '0', name: 'No Solution Selected' },
                    { id: '1', name: 'Confluence' },
                    { id: '2', name: 'JIRA' },
                    { id: '3', name: 'GitHub' },
                    { id: '3', name: 'Fortify' },
                    { id: '3', name: 'GoCD' }
                ],
                selectedFilterOptionModel: { id: '0', name: 'No Solution Selected' }
            };

            $scope.filterClicked = function () {
                if ($scope.data.selectedFilterOptionModel.id != 0) {
                    $log.info($scope.data.selectedFilterOptionModel.id)
                    httpService.invokeHttpGetRequest('/api/ideas/getideasbycountbysolution?numberofitems=' + localStoreService.getLocalStorageKeyValue('numberOfIdeas') + '&solutionid=' + $scope.data.selectedFilterOptionModel.id)
                        .then(function (response) {
                            $log.info('getideasbycountbysolution')
                            $log.info('response date : ', response);
                            $rootScope.ideasData = response.data;
                        })
                        .catch(function (response) {
                            $log.info('getideasbycountbysolution');
                            $log.error('Exception on GET request');
                            $log.error(response);
                        });
                }
            };
            $scope.loadMoreData = function () {
                if ($scope.data.selectedFilterOptionModel.id != 0) {
                    var currentValue = localStoreService.getLocalStorageKeyValue('numberOfIdeas');
                    localStorageService.set('numberOfIdeas', currentValue + 1);
                    httpService.invokeHttpGetRequest('/api/ideas/getideasbycountbysolution?numberofitems=' + localStoreService.getLocalStorageKeyValue('numberOfIdeas') + '&solutionid=' + $scope.data.selectedFilterOptionModel.id)
                        .then(function (response) {
                            $log.info('Selected Solution - ' + $scope.data.selectedFilterOptionModel.id)
                            $log.info('getideasbycountbysolution')
                            $log.info('response date : ', response);
                            $rootScope.ideasData = response.data;
                        })
                        .catch(function (response) {
                            $log.info('getideasbycountbysolution');
                            $log.error('Exception on GET request');
                            $log.error(response);
                        });
                }
            };
            $scope.loadLessData = function () {
                if ($scope.data.selectedFilterOptionModel.id != 0) {
                    if (localStoreService.getLocalStorageKeyValue('numberOfIdeas') > 0) {
                        var currentValue = localStoreService.getLocalStorageKeyValue('numberOfIdeas');
                        localStorageService.set('numberOfIdeas', currentValue - 1);
                        httpService.invokeHttpGetRequest('/api/ideas/getideasbycountbysolution?numberofitems=' + localStoreService.getLocalStorageKeyValue('numberOfIdeas') + '&solutionid=' + $scope.data.selectedFilterOptionModel.id)
                            .then(function (response) {
                                $log.info('Selected Solution - ' + $scope.data.selectedFilterOptionModel.id)
                                $log.info('getideasbycountbysolution')
                                $log.info('response date : ', response);
                                $rootScope.ideasData = response.data;
                            })
                            .catch(function (response) {
                                $log.info('getideasbycountbysolution');
                                $log.error('Exception on GET request');
                                $log.error(response);
                            });
                    }
                }
            };
        });
})();