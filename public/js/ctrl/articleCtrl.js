app.controller('articleCtrl', ["$scope", "$routeParams", "articles", function($scope, $routeParams, articles){
    $('body').scrollTop(0,0);
    $scope.articles = articles.getArticle($routeParams.id);
}]);