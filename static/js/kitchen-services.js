'use strict';

angular.module('KServices', [])

.factory('KServicesLogin', ['$location', function ($location) {
    var login = {};

    login.state = {
        'docs': '',
        'settings': '',
        'projects': '',
        'about': ''
    };

    login.navigate = function(destanation, section) {
        if (section != null)
            for (var key in login.state) {
                login.state[key] = '';
            }

        if (section in login.state)
            login.state[section] = 'active';

        $location.path(destanation);
    };

    return login;
}]);