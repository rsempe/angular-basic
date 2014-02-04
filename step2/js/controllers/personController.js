app.controller('PersonController', function($scope) {

  $scope.person = {
    name: "Romain Sempé"
  };

});

/*

The ng-controller directive creates a new $scope object for the DOM
element and nests it in the containing $scope,

We have now a model ($scope), a controller (PersonController) and the view ({{ name }}).

*/
