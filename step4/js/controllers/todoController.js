app.controller('TodoController', function($scope, $routeParams, todoStorage, filterFilter) {
  var todos = $scope.todos = todoStorage.get();

  $scope.newTodo = '';
  $scope.editedTodo = null;

  $scope.$watch('todos', function (newValue, oldValue) {
    $scope.remainingCount = filterFilter(todos, { completed: false }).length;
    $scope.completedCount = todos.length - $scope.remainingCount;
    $scope.allChecked = !$scope.remainingCount;
    if (newValue !== oldValue) { todoStorage.put(todos); }
  }, true);

  $scope.addTodo = function () {
    var newTodo = $scope.newTodo.trim();
    if (!newTodo.length) { return; }
    todos.push({ title: newTodo, completed: false });
    $scope.newTodo = '';
  };

  $scope.editTodo = function (todo) {
    $scope.editedTodo = todo;
  };

  $scope.doneEditing = function (todo) {
    $scope.editedTodo = null;
    todo.title = todo.title.trim();
    if (!todo.title) { $scope.removeTodo(todo); }
  };

  $scope.removeTodo = function (todo) {
    todos.splice(todos.indexOf(todo), 1);
  };

});
