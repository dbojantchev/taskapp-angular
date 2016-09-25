angular.module('taskapp').controller('taskController', taskController);

function taskController($scope, $compile, $http, $q, $dataService) {

    $scope.taskData = [];

    $scope.showCompleted = false;

    $scope.sortCol = 'id';
    $scope.sortDir = 'ASC';

    $scope.markComplete = function(task){
        task.status =  ( (task.status === 0) ? 1 : 0);
        $scope.updateTask(task);
    };

    $scope.addTask = function(albumId){
        $scope.newTask = {
            title:'',
            description:'',
            priority:10,
            status:0
        };
        $('#addTask').modal('show');
    };

    $scope.saveTask = function(){
        $dataService.addTask($scope.newTask)
            .success(function (data, status, headers, config) {
                $('#addTask').modal('hide');
                $scope.getTasks();
            }).error(function (data, status, headers, config) {
            console.log('System error. Album data could not be loaded');
            $('#addTask').modal('hide');
            }
        );
    };

    $scope.updateTask = function(task){
        $dataService.updateTask(task)
            .success(function (data, status, headers, config) {
                $scope.getTasks();
            }).error(function (data, status, headers, config) {
                console.log('System error. Album data could not be loaded');
            }
        );
    };

    $scope.getTasks = function (cond) {
        $dataService.getTasks(cond || {})
            .success(function (data, status, headers, config) {
                console.log("getTasks", data);
                $scope.taskData = data.rows;
                $scope.taskData.forEach(function (item) {
                    item.create_dt = window.taskapp.dateConv1(item.create_dt);
                });

            }).error(function (data, status, headers, config) {
            console.log('System error. Task data could not be loaded');
        });
    };

    $scope.sort = function(col){

        if($scope.sortCol === col){
            $scope.sortCol = col;
            $scope.sortDir = ($scope.sortDir === 'ASC') ? 'DESC' : 'ASC';
        } else {
            $scope.sortCol = col;
            $scope.sortDir = 'ASC';
        }

        var cond = {};
        cond.sort = {};
        cond.sort.sortCol = col;
        cond.sort.sortDir = $scope.sortDir;
        $scope.getTasks(cond);
    };

    $scope.getTasks();
}