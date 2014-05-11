'use strict';

angular.module('kitchen.controllers', ['ngRoute'])

.controller('LoginCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
    $scope.authorization = {
        username: '',
        password: ''
    };

    function loginSucceed() {
        $location.path('/ide/projects/');
    }

    function loginFailed(data, status) {
        if (status == '401') {
            $location.path('/login/again/');
        } else if (status == '420') {
            $location.path('/login/wait/');
        }

        $location.path('/login/');
    }

    $scope.logIn = function () {
        var login = {
            method: 'post',
            url: '/authorization/login/',
            data: JSON.stringify($scope.authorization)
        };

        $http(login).success(loginSucceed).error(loginFailed);
    };

    $scope.signUp = function () {
        $location.path('/authorization/signup/');
    };
}])

.controller('IDECtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
    $scope.name = 'Kirill';

    function logoutSucceed() {
        $location.path('/login/');
    }

    function logoutFailed() {
    }

    $scope.logOut = function () {
        var logout = {
            method: 'post',
            url: '/authorization/logout/',
            data: ''
        };

        $http(logout).success(logoutSucceed).error(logoutFailed);
    };
}]);
