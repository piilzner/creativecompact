app.controller('projectsCtrl', ["$scope", "$http", "projects", function ($scope, $http, projects) {
    $('body').scrollTop(0, 0);
    $scope.projects = projects.getProjects();

    //$scope.filters = "";

    $('.proj-wrapper').masonry({
        itemSelector: '.project-box'
    });

    $scope.setFilter = function (filter) {
        $scope.filters = filter;
    }

}]);