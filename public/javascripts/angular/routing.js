brewApp
.config(['$routeProvider', '$locationProvider', '$httpProvider',
    function ($routeProvider, $locationProvider, $httpProvider) {
        
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        
        $routeProvider.
            when('/', {
            templateUrl: 'templates/partials/main.html',
            controller: 'MainCntrl'
        }).
            when('/howtobrew', {
            templateUrl: 'templates/partials/howtobrew.html',
            controller: 'HowToCntrl'
        }).
            when('/player', {
            templateUrl: 'templates/partials/main.html',
            controller: 'playerCtrl',
            reloadOnSearch: false,
        }).
            otherwise({
            redirectTo: '/'
        });
        
        $locationProvider.html5Mode(true);

    }]);