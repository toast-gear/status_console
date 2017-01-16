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

            // injected $location provider into your route provider, setting html 5 mode to true gets rid of the '#?' in your URL
            // we want false otherwise routing breaks
            $locationProvider.html5Mode(false);
        })
        .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
            localStorageServiceProvider
                .setPrefix('statusApp_')
                .setStorageType('sessionStorage');
        }]);
})();