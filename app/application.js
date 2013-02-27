"use strict";

angular.module("navbarapp", ["controllers"]);

var controllers = angular.module("controllers", []);

controllers.controller("HomePageCtrl", function HomePageCtrlHomePageCtrl($scope) {
  $scope.pageName = "Home Page";
});

controllers.controller("SecondPageCtrl", function SecondPageCtrl($scope) {
  $scope.pageName = "Second Page";
});

controllers.controller("ThirdPageCtrl", function ThirdPageCtrl($scope) {
  $scope.pageName = "Third Page";
});

