'use strict';

angular.module('kitchen.controllers', ['ngRoute'])

.controller('IDECtrl', ['$scope', '$location', '$http', '$rootScope',
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

//    $scope.autoRegistration = 'off';
//
//    $scope.firstName = $rootScope.firstName || '';
//    $scope.lastName = $rootScope.lastName || '';

    /* login */

    function loginSucceed(data) {
        $rootScope.firstName = data['first_name'];
        $rootScope.lastName = data['last_name'];
        $rootScope.loggedIn = true;
        $location.path('/ide/html/projects/');
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

        $location.path('/ide/html/login_fail/');
    }

    $scope.login = function () {
        var load = {
            method: 'post',
            url: '/ide/json/login/',
            data: JSON.stringify($scope.authorization)
        };

        $http(load).success(loginSucceed).error(loginFailed);
    };

    /* logout */

    function logoutSucceed() {
        $rootScope.loggedIn = false;
        $location.path('/ide/html/welcome/');
    }

    $scope.logout = function () {
        var load = {
            method: 'post',
            url: '/ide/json/logout/'
        };

        $http(load).success(logoutSucceed).error(function () {});
    };


    $scope.signUp = function () {
        $location.path('/ide/html/signup/');
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

    $scope.projectName = '123';

    $scope.newProject = function () {
        alert('New Project');
    };

    $scope.newProjectFromFiles = function () {
        alert('New Project From Files');
    };

    $scope.newProjectFromVCS = function () {
        alert('New Project From VCS');
    };

}])

.controller('DocCtrl', ['$scope', '$location', '$http', '$rootScope',
function ($scope, $location, $http, $rootScope) {

    $scope.projectName = '456';

}]);

