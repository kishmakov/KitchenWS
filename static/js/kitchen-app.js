'use strict';

angular.module('kitchen', [
    'ngRoute',
    'ngCookies',
    'kitchen.controllers'])

.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

    $routeProvider.when('/login/', {controller: 'LoginCtrl', title: 'Login to Kitchen IDE', templateUrl: '/login/'});
    $routeProvider.when('/login/again/', {controller: 'LoginCtrl', title: 'Login to Kitchen IDE', templateUrl: '/login/again/'});
    $routeProvider.when('/login/wait/', {controller: 'LoginCtrl', title: 'User activation pending', templateUrl: '/login/wait/'});

    $routeProvider.when('/ide/projects/', {controller: 'IDECtrl', title: 'Kitchen IDE', templateUrl: '/ide/projects/'});

    $routeProvider.when('/about/legal/', {title: 'Kitchen IDE Legal', templateUrl: '/about/legal/'});

    $routeProvider.otherwise({redirectTo: '/login'});
}]).

run(['$location', '$rootScope', '$templateCache',
    function($location, $rootScope, $templateCache) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });

        $rootScope.$on('$viewContentLoaded', function() {
            $templateCache.removeAll();
        });

        $rootScope.navigate = function(destanation) {
            $location.path(destanation);
        }
    }
]);

