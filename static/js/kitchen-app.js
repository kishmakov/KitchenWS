'use strict';

angular.module('kitchen', [
    'ngRoute',
    'ngCookies',
    'kitchen.controllers',
    'kitchen.services'])

.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider, $rootScope) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';


//    $routeProvider.when('/login/again/', {
//        controller: 'LoginCtrl',
//        resolve: {
//            title: function (kitchenTitle) {
//                kitchenTitle.title = 'Login to Kitchen IDE';
//            }
//        },
//        templateUrl: '/login/again/'
//    });
//
//    $routeProvider.when('/login/wait/', {
//        controller: 'LoginCtrl',
//        resolve: {
//            title: function (kitchenTitle) {
//                kitchenTitle.title = 'User activation pending';
//            }
//        },
//        templateUrl: '/login/wait/'
//    });
//
//    $routeProvider.when('/ide/projects/', {
//        controller: 'IDECtrl',
//        resolve: {
//            title: function (kitchenTitle) {
//                kitchenTitle.title = 'Kitchen IDE';
//            }
//        },
//        templateUrl: '/ide/projects/'
//    });
//
//    $routeProvider.when('/ide/projects/:id/:projectName/', {
//        controller: 'IDECtrl',
//        resolve: {
//            projectName: function ($route, kitchenTitle) {
//                console.log('projectName=' + $route.current.params.projectName);
//                kitchenTitle.title = $route.current.params.projectName || 'Unnamed';
//                kitchenTitle.projectName = $route.current.params.projectName || 'Unnamed';
//            }
//        },
//        redirectTo: function (params) {
//            return '/ide/projects/' + params.id + '/';
//        }
//    });
//
//    $routeProvider.when('/ide/projects/:id/', {
//        controller: 'IDECtrl',
//        templateUrl: function (params) {
//            return '/ide/projects/' + params.id + '/';
//        }
//    });

//    $routeProvider.when('/about/legal/', {
//        title: 'Kitchen IDE Legal',
//        templateUrl: '/about/legal/'});

//    $routeProvider.when('/doc/html/:id/:docTitles/', {
//        controller: 'DocCtrl',
//        title: 'Kitchen Documentation',
//        resolve: {
//            projectName: function ($route, kitchenTitle) {
//                console.log('docTitle=' + $route.current.params.docTitle);
//                kitchenTitle.title = $route.current.params.docTitle || 'Unnamed';
//            }
//        },
//        redirectTo: function (params) {
//            return '/about/doc/' + params.id + '/';
//        }
//    });

    $routeProvider.when('/doc/html/:id/', {
        controller: 'DocCtrl',
        templateUrl: function (params) {
            return '/doc/html/' + params.id + '/';
        }
    });

    $routeProvider.when('/doc/html/', {
        controller: 'DocCtrl',
        templateUrl: '/doc/html/',
        resolve: {
            title: function (kitchenTitle) {
                kitchenTitle.title = 'Documentation on Kitchen';
            }
        }
    });

    $routeProvider.when('/ide/html/login/', {
        controller: 'LoginCtrl',
        templateUrl: '/ide/html/login/'
    });

    $routeProvider.otherwise({redirectTo: '/ide/html/login/'});
}])

.run(['$location', '$rootScope', '$templateCache', '$http',
    function($location, $rootScope, $templateCache, $http) {
        $rootScope.$on('$routeChangeSuccess', function (event) {
            var request = {
                method: 'post',
                url: $location.url().replace('html', 'json') + 'header/'
            };

            var defaultTitle = 'The Kitchen';

            $http(request).success(function (data) {
                $rootScope.title = data.title || defaultTitle;
            }).error(function () {
                $rootScope.title = defaultTitle;
            });
        });

        $rootScope.$on('$viewContentLoaded', function() {
            $templateCache.removeAll();
        });

        $rootScope.navigate = function(destanation) {
            $location.path(destanation);
        }
    }
]);

