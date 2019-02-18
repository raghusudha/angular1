var app = angular.module("app", []);
app.controller("HelloController", function($scope) {
  $scope.name="Hello world";
  console.log($scope.name);
});