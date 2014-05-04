var LoginApp = angular.module('KitchenIDE.login', ['ngAnimate', 'ngSanitize', 'mgcrea.ngStrap']);

'use strict';
angular.module('KitchenIDE.login')

.config(function($modalProvider) {
  angular.extend($modalProvider.defaults, {
    html: true
  });
})

.controller('BodyCtrl', function($scope, $modal) {
    var message = 'Automatic registration doesn\'t work for now.<br>';
    message += 'You could register via email. Send your <br>';
    message += 'username and password to ';
    message += '<a href="mailto:shmakir@yandex.ru">';
    message += 'shmakir@yandex.ru</a><br><br>';
    message += 'Kirill';
    $scope.modal = {title: 'Sign Up', content: message};

});