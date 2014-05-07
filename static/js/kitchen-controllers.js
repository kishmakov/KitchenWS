'use strict';

angular.module('kitchen.controllers', ['ngRoute'])

.controller('LoginCtrl', ['$scope', '$location', '$http',
    function ($scope, $location, $http) {
        $scope.authorization = {
            login: '',
            password: ''
        };

        function openProjects() {
            $location.path('/ide/projects/');
        }

        function loginAgain() {
            $location.path('/login/again/');
        }

        $scope.logIn = function () {
            var login = {
                method: 'post',
                url: '/authorization/read/',
                data: $scope.authorization
            };

            $http(login).success(openProjects).error(loginAgain);
        };

        $scope.signUp = function () {
            $location.path('/authorization/write/');
        };
}])

.controller('IDECtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.name = 'Kirill';
}]);
