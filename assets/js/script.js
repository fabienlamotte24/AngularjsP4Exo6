var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
  $scope.text1 = false;
  $scope.text2 = false;
  $scope.para1 = function(){
    $scope.text1 = true;
    $scope.text2 = false;
  };
  $scope.para2 = function(){
    $scope.text1 = false;
    $scope.text2 = true;
  };
});
