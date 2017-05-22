app.controller('projectsCtrl', ["$scope", "$http", "projects", function ($scope, $http, projects) {
    $('body').scrollTop(0, 0);
    $scope.projects = projects.getProjects();

    /* Masonry wrapper */
    $('.proj-wrapper').masonry({
        itemSelector: '.project-box'
    });

    /* Project filter */
    $scope.setFilter = function (filter) {
        $scope.filters = filter;
    }

}]);
