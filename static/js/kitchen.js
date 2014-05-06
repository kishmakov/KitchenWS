'use strict';

angular.module('Kitchen.Login', [])
    .controller('Kitchen.LoginCtrl', ['$scope', function ($scope) {
        $scope.title = '';
    }]);

angular.module(
    'Kitchen',
    [
        'ngRoute',
        'Kitchen.Login'
    ])
    .config(function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/',
            controller: 'Kitchen.LoginCtrl',
            title: 'Login to Kitchen IDE'
        });
        $routeProvider.when('/', {redirectTo: '/login'});
    }).run(['$location', '$rootScope', function($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
    });
}]);

