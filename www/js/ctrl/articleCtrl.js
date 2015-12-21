app.controller('articleCtrl', ["$scope", "$routeParams", "articles", function($scope, $routeParams, articles){
    
     $('body').scrollTop(0,0);
    
    var currentId = $routeParams.id;
     
   $scope.articles = articles.getArticle(currentId);
    
    
    console.log($scope.articles);
    
    
    
    
    
}]);