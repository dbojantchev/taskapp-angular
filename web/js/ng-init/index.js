var taskmodule = angular.module('taskapp', ['ui.router', 'ui.bootstrap']);

taskmodule.config(function ($stateProvider, $urlRouterProvider) {

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


