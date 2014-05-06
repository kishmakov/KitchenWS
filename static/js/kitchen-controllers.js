'use strict';

angular.module('kitchen.controllers', ['ngRoute'])

.controller('LoginCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.logIn = function () {
        $location.path('/ide');
    };

    $scope.signUp = function () {
        $location.path('/login/signup');
    };
}])

.controller('IDECtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.name = 'Kirill';
}]);
