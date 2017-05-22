app.controller('homeCtrl', ["$scope", "projects", function($scope, projects){

    $('body').scrollTop(0,0);

    /* Get projects on firstpage */
    $scope.projects = projects.getProjects();

    /* Scroll section */
    $("#scroll-down").click(function() {
      $('html, body').animate({
        scrollTop: $("#simple-about").offset().top
    }, 2000);
});

}]);
