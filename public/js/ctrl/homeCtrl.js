app.controller('homeCtrl', ["$scope", "projects", function($scope, projects){
    
    $('body').scrollTop(0,0);
    
    $scope.projects = projects.getProjects();
    
   $("#scroll-down").click(function() {
    $('html, body').animate({
        scrollTop: $("#simple-about").offset().top
    }, 2000);
});
    
}]);