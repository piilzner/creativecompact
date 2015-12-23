app.controller('contactCtrl', ["$scope", "$http", function($scope, $http){
    $('body').scrollTop(0,0);
    
    $scope.sendMessage = function() {
        $http.post("/message", {
            email: $scope.email,
            name: $scope.name,
            message: $scope.message
        }).then(function(data){
            if(data.data.error == "novalid"){
                $scope.errormsg = data.data.message;
            }else{
                $scope.email = "";
                $scope.name = "";
                $scope.message = "";
                $scope.errormsg = "";
                $('.message-sucess').css('right', "0");
                setTimeout(function(){
                    $('.message-sucess').css('right', '-320px');
                }, 3000);
            }
        },function() {
            $scope.errormsg = "Ett fel uppstog försök igen!";
        });
        
    }
    
}]);