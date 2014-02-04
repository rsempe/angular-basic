var app = angular.module('myApp', []);

app.run(function($rootScope) {
  $rootScope.name = "Romain Sempé";
});

/*

The first line creates the Angular module named myApp. We could have more than one angular
module and it could be set on any element of the dom.

We’ll build using $scope, which is one of the most important Angular concepts.

Although it sounds complex, the $scope is just a JavaScript object. Both the controller
and the view have access to the $scope so it can be used for communication between the two.

In the Model-View-Controller structure, this $scope object becomes the model.

*/