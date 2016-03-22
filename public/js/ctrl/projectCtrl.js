app.controller('projectCtrl', ["$scope", "$routeParams", "projects", function($scope, $routeParams, projects){
    $('body').scrollTop(0,0);
    $scope.test = projects.getProject($routeParams.id);
    
       
    $scope.projects = projects.getProject($routeParams.id);
    
    $(window).scroll(function(){
        if ($(window).scrollTop() >= $('.project-img').height) {
            $('.proj-content').css({'position' : 'fixed'});
        }else{
            $('.proj-content').css({'position' : 'relative'});
        }
    });
  
}]);