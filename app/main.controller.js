(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('MainController', MainController);

    MainController.$inject = ['MainFactory'];

    /* @ngInject */
    function MainController(MainFactory) {
        var vm = this;
        vm.title = 'MainController';
        vm.addTodo = addTodo;
        vm.deleteTodo = deleteTodo;

        activate();

        ////////////////
        //Active to retreive data from mock file
        function activate() {
            MainFactory.getTodoItems()
                .then(function(response) {

                vm.todos = response;

            })
        }
        //Adding/deleting data
        function addTodo(todoInput, todoPriority){
            MainFactory.addTodo(vm.todos, todoInput, todoPriority);
         }

         function deleteTodo(data){
            var index = vm.todos.indexOf(data);
             MainFactory.deleteTodo(vm.todos, index);

         }
    }
})();