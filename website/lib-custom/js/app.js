(function () {
    var statusApp = angular.module('statusApp', ['ui.router', 'LocalStorageModule'])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('root', {    
                    url: '/',
                    templateUrl: '/partials/status.html',
                    controller: 'statusController as statusController'
                }).state('metrics', {    
                    url: '/metrics',
                    templateUrl: '/partials/metrics.html',
                    controller: 'metricsController as metricsController'
                });
            $locationProvider.html5Mode(true);
        })
        .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
            localStorageServiceProvider
                .setPrefix('statusApp_')
                .setStorageType('sessionStorage');
        }]);
})();