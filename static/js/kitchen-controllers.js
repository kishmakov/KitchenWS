'use strict';

angular.module('kitchen.controllers', ['ngRoute'])

.controller('RootCtrl', ['$rootScope', '$location', '$http',
function ($rootScope, $location, $http) {
    $rootScope.loggedIn = false;

    $rootScope.authorization = {
        username: '',
        password: ''
    };

    $rootScope.state = {
        'docs': '',
        'settings': '',
        'projects': '',
        'about': ''
    };

    $rootScope.navigate = function(destanation, section) {
        for (var key in $rootScope.state) {
            $rootScope.state[key] = '';
        }

        if (section in $rootScope.state)
            $rootScope.state[section] = 'active';

        $location.path(destanation);
    };

    /* login */

    function loginSucceed(data) {
        $rootScope.loggedIn = true;
        $rootScope.firstName = data['first_name'];
        $rootScope.lastName = data['last_name'];
        $location.path('/ide/html/projects/');
    }

    function loginFailed(data, status) {
        $rootScope.loggedIn = false;

        if (status == '401') {
            $location.path('/ide/html/login/again/');
            return;
        } else if (status == '420') {
            $rootScope.firstName = data['first_name'];
            $rootScope.lastName = data['last_name'];
            $location.path('/ide/html/login/wait/');
            return;
        }

        $location.path('/ide/html/login/fail/');
    }

    $rootScope.login = function () {
        var load = {
            method: 'post',
            url: '/ide/json/login/',
            data: JSON.stringify($rootScope.authorization)
        };

        $http(load).success(loginSucceed).error(loginFailed);
    };

    /* logout */

    function logoutSucceed() {
        $rootScope.loggedIn = false;
        $location.path('/ide/html/welcome/');
    }

    $rootScope.logout = function () {
        if (!$rootScope.loggedIn)
            return;

        var load = {
            method: 'post',
            url: '/ide/json/logout/'
        };

        $http(load).success(logoutSucceed).error(function () {});
    };
}])

.controller('IDECtrl', ['$scope', '$location', '$rootScope',
function ($scope, $location, $rootScope) {
//    $scope.autoRegistration = 'off';
//
//    $scope.firstName = $rootScope.firstName || '';
//    $scope.lastName = $rootScope.lastName || '';

    $scope.registration = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        verification: ''
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

