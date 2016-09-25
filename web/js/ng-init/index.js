var espApp = angular.module('taskapp', ['datatables', 'ui.router','ui.bootstrap']);

    $('#container').show();

    espApp.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/views/tasks.html'
            })
            .state('tasks', {
                url: '/tasks',
                templateUrl: '/views/tasks.html'
            });
    });


