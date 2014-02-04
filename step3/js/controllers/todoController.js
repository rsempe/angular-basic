app.controller('TodoController', function($scope) {

  $scope.todos = [];
  $scope.newTodo = '';

  $scope.addTodo = function() {
    var newTodo = $scope.newTodo.trim();
    if (!newTodo.length) { return; }
    $scope.todos.push({ title: newTodo });
    $scope.newTodo = '';
  };

  $scope.removeTodo = function(todo) {
    $scope.todos.splice($scope.todos.indexOf(todo), 1);
  };

});
