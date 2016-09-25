angular.module('taskapp')
    .factory("$dataService", ['$http',
        function ($http) {
            return {
                getTasks: function (cond) {
                    console.log("Inside getTasks: ");
                    return $http({
                        method: 'POST',
                        data:cond,
                        url: '/api/getTasks'
                    });
                },

                addTask: function (newTask) {
                    console.log("Inside addTask: " + newTask);
                    return $http({
                        method: 'POST',
                        data: newTask,
                        url: '/api/addTask'
                    });
                },

                updateTask: function (task) {
                    console.log("Inside addTask: " + task);
                    return $http({
                        method: 'POST',
                        data: task,
                        url: '/api/updateTask'
                    });
                }

            }
        }
    ]);

