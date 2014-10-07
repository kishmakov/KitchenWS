'use strict';

angular.module('KApp', [
    'ngRoute',
    'ngCookies',
    'KC',
    'KS'])

.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}])

.config(['$routeProvider', function($routeProvider) {

//    $rootScope.firstName = '';
//    $rootScope.lastName = '';
//    $rootScope.loggedIn = false;

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

    $routeProvider.when('/doc/html/sections/:id/', {
        controller: 'DocCtrl',
        templateUrl: function (params) {
            return '/doc/html/sections/' + params.id + '/';
        }
    });

    $routeProvider.when('/about/html/terms/', {
        controller: 'DocCtrl',
        templateUrl: '/about/html/terms/'
    });

    $routeProvider.when('/doc/html/', {
        controller: 'DocCtrl',
        templateUrl: '/doc/html/'
    });

    $routeProvider.when('/ide/html/projects/', {
        controller: 'IDECtrl',
        templateUrl: '/ide/html/projects/'
    });

    $routeProvider.when('/ide/html/welcome/', {
        controller: 'IDECtrl',
        templateUrl: '/ide/html/welcome/'
    });

    $routeProvider.when('/ide/html/login/wait/', {
        controller: 'IDECtrl',
        templateUrl: '/ide/html/login/wait/'
    });

    $routeProvider.when('/ide/html/login/again/', {
        controller: 'IDECtrl',
        templateUrl: '/ide/html/login/again/'
    });

    $routeProvider.otherwise({
        redirectTo: function ($rootScope) {
            return $rootScope.loggedIn
                ? '/ide/html/projects/'
                : '/ide/html/welcome/';
        }
    });
}])

.run(['$location', '$rootScope', '$templateCache', '$http',
function($location, $rootScope, $templateCache, $http) {

    MathJax.Hub.Config({
        extensions: ['tex2jax.js','TeX/noErrors.js','TeX/AMSsymbols.js'],
        jax: ['input/TeX','output/HTML-CSS'],
        tex2jax: {
            inlineMath: [['$','$'],['\\(','\\)']],
            displayMath: [['\\[','\\]'], ['$$','$$']]
        },
        'HTML-CSS': {availableFonts:['TeX']}
    });


    $rootScope.$on('$locationChangeStart', function(scope, next, current) {
        if (current && current == next)
            return;

        var defaultTitle = 'The Kitchen';
        var request = {
            method: 'post',
            url: $location.url().replace('html', 'json') + 'header/'
        };

        $http(request).success(function (data) {
            $rootScope.title = data.title || defaultTitle;
            if ('hasMathJax' in data)
                $rootScope.hasMathJax = data.hasMathJax;

        }).error(function () {
            $rootScope.title = defaultTitle;
        });
    });

    $rootScope.$on('$viewContentLoaded', function() {
        $templateCache.removeAll();
        $rootScope.reloadMathJax();
    });
}]);

