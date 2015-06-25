/// <reference path="../../typings/angularjs/angular.d.ts"/>

angular.module('DemoApp', [])

  .controller('DemoController', ['$scope', '$http', function($scope, $http) {        
    $scope.showUser = false;
    
     $scope.getDemo = function() {
       var s = $scope.demoText;
       $scope.results = s[0] + s[s.length -1] + s;
    };
    
    $scope.getUser = function() {
  		$http.get('/user').success(function(data) {
        $scope.showUser = true;
        $scope.user = data["results"][0]["user"];
        console.log($scope.user);
  		});      
    };            
  }]);