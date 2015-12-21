app.controller('projectsCtrl', ["$scope", "$http", "projects", function($scope, $http, projects){
    $('body').scrollTop(0,0);
    $scope.projects = projects.getProjects();
}]);