'use strict';

angular.module('KC', ['ngRoute', 'KS'])

.controller('RootCtrl',
['$scope', 'KSNavigation', 'KSLogin', 'KSAuthorization',
function ($scope, KSNavigation, KSLogin, KSAuthorization) {
    $scope.loggedIn = false;
    $scope.hasMathJax = false;

    $scope.authorization = KSAuthorization;

    $scope.state = KSNavigation.state;
    $scope.navigate = KSNavigation.navigate;

    $scope.login = KSLogin.login;
    $scope.logout = KSLogin.logout;

    /* load project */

    function receivedText(e) {
        var lines = e.target.result;
        var obj = JSON.parse(lines);
        alert('obj[a]=' + obj['a'] + ', obj[c] = ' + obj['c']);
    }

    function load() {
        var files = document.getElementById('kitchen-file-input').files;
        if (!files.lenght) {
            var fr = new FileReader();
            fr.onload = receivedText;
            fr.readAsText(files[0]);
        }
    }

    $scope.triggerLoad = function () {
        document.getElementById('kitchen-file-input').click();
    };

    /* mathjax */


    $scope.reloadMathJax = function() {
        if ($scope.hasMathJax)
            MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'kitchen-wrap-footer']);
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

