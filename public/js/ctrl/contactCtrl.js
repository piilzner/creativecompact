app.controller('contactCtrl', ["$scope", "$http", function($scope, $http){
    
    $('body').scrollTop(0,0);
    
    
    $scope.sendMessage = function() {
        
        console.log($scope.name, $scope.email,$scope.message);
        
        $http.post("/message", {
            email: $scope.email,
            name: $scope.name,
            message: $scope.message
        }).then(function(){
            console.log("succsess");
        },function() {
            console.log("error");
        });
    }
    
}]);