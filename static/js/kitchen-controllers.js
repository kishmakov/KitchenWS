'use strict';

angular.module('kitchen.controllers', ['ngRoute'])

.controller('LoginCtrl',
    ['$scope', '$location', '$http',
    function ($scope, $location, $http) {
    $scope.scr = 'login';

    $scope.authorization = {
        login: '',
        password: ''
    };

    $scope.logIn = function () {
        var login = {
            method: 'post',
            url: '/authorization',
            data: $scope.authorization
        };

        $http(login)
            .success(function(){ alert('Success!');})
            .error(function(){ alert('Error.');});

        $location.path('/ide/projects/');
    };

    $scope.signUp = function () {
        $scope.scr = 'signup';
        $location.path('/login/signup/');
    };

    $scope.goBack = function () {
        $scope.scr= 'login';
        $location.path('/login/');
    };
}])

.controller('IDECtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.name = 'Kirill';
}]);
