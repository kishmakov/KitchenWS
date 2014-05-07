'use strict';

angular.module('kitchen', [
    'ngRoute',
    'ngCookies',
    'kitchen.controllers'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login/', {controller: 'LoginCtrl', title: 'Login to Kitchen IDE', templateUrl: '/login/'});
    $routeProvider.when('/login/again/', {controller: 'LoginAgainCtrl', title: 'Login to Kitchen IDE', templateUrl: '/login/again/'});
    $routeProvider.when('/ide/projects/', {controller: 'IDECtrl', title: 'Kitchen IDE', templateUrl: '/ide/projects/'});
    $routeProvider.otherwise({redirectTo: '/login'});
}]).

run(['$location', '$rootScope', '$http', '$cookies',
    function($location, $rootScope, $http, $cookies) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
        $http.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
    }
]);

