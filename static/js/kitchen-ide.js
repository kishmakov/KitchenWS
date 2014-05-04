'use strict';

angular.module('Kitchen.IDE.Login', [])
    .controller('Kitchen.IDE.LoginCtrl', ['$scope', function ($scope) {
        $scope.title = '';
    }]);

angular.module(
    'Kitchen.IDE',
    [
        'ngRoute',
        'Kitchen.IDE.Login'
    ])
    .config(function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/',
            controller: 'Kitchen.IDE.LoginCtrl',
            title: 'Login to Kitchen IDE'
        });
        $routeProvider.when('/', {redirectTo: '/login'});
    }).run(['$location', '$rootScope', function($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
    });
}]);

