app.controller('projectCtrl', ["$scope", "$routeParams", "projects", function($scope, $routeParams, projects){
    $('body').scrollTop(0,0);
    
    var currentId = $routeParams.id;
     
   $scope.projects = projects.getProject(currentId);
    
    
    $(window).scroll(function(){
       
         
        
        if ($(window).scrollTop() >= $('.project-img').height) {
         
            $('.proj-content').css({
                'position' : 'fixed'
            })
            
        }else{
            $('.proj-content').css({
                'position' : 'relative'
            });
        }
        
        console.log($('.proj-container').height);
    });
    
    
    
    
}]);