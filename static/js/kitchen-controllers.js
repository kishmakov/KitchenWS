'use strict';

angular.module('kitchen.controllers', ['ngRoute'])

.controller('LoginCtrl', ['$scope', '$location', '$http', '$rootScope',
function ($scope, $location, $http, $rootScope) {
    $scope.authorization = {
        username: '',
        password: ''
    };

    $scope.registration = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        verification: ''
    };

    $scope.autoRegistration = 'off';

    $scope.firstName = $rootScope.firstName || '';
    $scope.lastName = $rootScope.lastName || '';
    $scope.loggedIn = $rootScope.loggedIn || false;

    function loginSucceed(data) {
        $rootScope.firstName = data['first_name'];
        $rootScope.lastName = data['last_name'];
        $rootScope.loggedIn = true;
        $location.path('/ide/projects/');
    }

    function loginFailed(data, status) {
        $rootScope.loggedIn = false;

        if (status == '401') {
            $location.path('/login/again/');
            return;
        } else if (status == '420') {
            $rootScope.firstName = data['first_name'];
            $rootScope.lastName = data['last_name'];
            $location.path('/login/wait/');
            return;
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

    $scope.$on('$routeChangeSuccess', function () {
        if ($scope.loggedIn) {
            var data = {
                firstName: $rootScope.firstName,
                lastName: $rootScope.lastName
            };
            loginSucceed(data);
        }
    });
}])

.controller('IDECtrl', ['$scope', '$location', '$http', '$rootScope',
function ($scope, $location, $http, $rootScope) {
    $scope.name = 'Kirill';

    function logoutSucceed() {
        $rootScope.loggedIn = false;
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

    $scope.newProject = function () {
        alert('New Project');
    };

    $scope.newProjectFromFiles = function () {
        alert('New Project From Files');
    };

    $scope.newProjectFromVCS = function () {
        alert('New Project From VCS');
    };
}]);
