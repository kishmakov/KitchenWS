'use strict';


angular.module('kitchen', [
    'ngRoute',
    'kitchen.controllers'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {controller: 'LoginCtrl', title: 'Login to Kitchen IDE', templateUrl: 'login/'});
    $routeProvider.when('/ide', {controller: 'IDECtrl', title: 'Kitchen IDE', templateUrl: 'ide/'});
    $routeProvider.when('/login/signup', {controller: 'LoginCtrl', title: 'Sign Up to Kitchen IDE'});
    $routeProvider.otherwise({redirectTo: '/login'});
}]).

run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);

