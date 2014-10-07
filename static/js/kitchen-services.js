'use strict';

angular.module('KS', [])

.factory('KSNavigation',
['$location',
function ($location) {
    var navigation = {};

    navigation.state = {
        'docs': '',
        'settings': '',
        'projects': '',
        'about': ''
    };

    navigation.navigate = function(destanation, section) {
        if (section != null)
            for (var key in navigation.state) {
                navigation.state[key] = '';
            }

        if (section in navigation.state)
            navigation.state[section] = 'active';

        $location.path(destanation);
    };

    return navigation;
}])

.factory('KSAuthorization',
function () {
    var authorization = {
        username: '',
        password: ''
    };

    return authorization;
})

.factory('KSMathJax',
function () {
    var authorization = {
        username: '',
        password: ''
    };

    return authorization;
})

.factory('KSLogin',
['$location', '$http', 'KSNavigation', 'KSAuthorization',
function ($location, $http, KSNavigation, KSAuthorization) {
    var login = {};

    /* login */

    function loginSucceed(data) {
        login.loggedIn = true;
        login.firstName = data['first_name'];
        login.lastName = data['last_name'];
        KSNavigation.navigate('/ide/html/projects/', 'projects');
    }

    function loginFailed(data, status) {
        login.loggedIn = false;

        if (status == '401') {
            $location.path('/ide/html/login/again/');
            return;
        } else if (status == '420') {
            login.firstName = data['first_name'];
            login.lastName = data['last_name'];
            $location.path('/ide/html/login/wait/');
            return;
        }

        $location.path('/ide/html/login/fail/');
    }

    login.login = function () {
        var load = {
            method: 'post',
            url: '/ide/json/login/',
            data: JSON.stringify(KSAuthorization.authorization)
        };

        $http(load).success(loginSucceed).error(loginFailed);
    };

    /* logout */

    function logoutSucceed() {
        login.loggedIn = false;
        KSNavigation.navigate('/ide/html/welcome/', '');
    }

    login.logout = function () {
        if (!login.loggedIn)
            return;

        var load = {
            method: 'post',
            url: '/ide/json/logout/'
        };

        $http(load).success(logoutSucceed).error(function () {});
    };

    return login;
}]);