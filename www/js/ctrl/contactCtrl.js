app.controller('contactCtrl', ["$scope", function($scope){
    
    $('body').scrollTop(0,0);
    
    
    
    $('.send').click(function(){
       
    
        
        $('.message-sucess').css('right', "0");
        
        setTimeout(function(){
          $('.message-sucess').css('right', '-320px');
        }, 3000);
        
        
        
    });
    
}]);