(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('MainFactory', MainFactory);

    MainFactory.$inject = ['$http'];

    /* @ngInject */
    function MainFactory($http) {
        var service = {
            getTodoItems: getTodoItems,
            addTodo: addTodo,
            deleteTodo: deleteTodo
        };
        return service;

        ////////////////

        //Retrieves data from json file
        function getTodoItems() {
            return $http({
                method: 'GET',
                url: 'app/todos.json'
            }).then(function(response) {

                return response.data;

            });

        }
        //Adds/deletes data
        function addTodo(todoList, todoInput, todoPriority) {
            var newTodo = { name: todoInput, priority: todoPriority }

            return todoList.push(newTodo);

        }

        function deleteTodo(todoList, index) {

            return todoList.splice(index, 1);

        }

    }
})();
