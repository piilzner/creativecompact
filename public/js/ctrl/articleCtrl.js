app.controller('articleCtrl', ["$scope", "$routeParams", "articles", function($scope, $routeParams, articles){
    $('body').scrollTop(0,0);

    /* Get articles */
    $scope.articles = articles.getArticle($routeParams.id);
}]);
