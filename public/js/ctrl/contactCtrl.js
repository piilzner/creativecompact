app.controller('contactCtrl', ["$scope", "$http", function($scope, $http){
    $('body').scrollTop(0,0);
    
    $scope.sendMessage = function() {
        
        $http.post("/message", {
            email: $scope.email,
            name: $scope.name,
            message: $scope.message
        }).then(function(data){
            console.log(data.data);
            if(data.data.error == "novalid"){
                $scope.errormsg = data.data.message;
            }else{
                /* Show succses modal here!*/
                console.log("succsess");
            }
        },function() {
            $scope.errormsg = "Ett fel uppstog försök igen!";
        });
        
    }
    
}]);