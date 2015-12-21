app.controller('articlesCtrl', ["$scope", "$http", "articles", function($scope, $http, articles){
    
    
      
    
  $scope.articles = articles.getArticles();
    
   $('body').scrollTop(0,0);
    
$('.box-wrapper').masonry({
  // options
  itemSelector: '.box'
});
    
    
    
    $scope.setFilter = function(filter){
        
        $scope.filters = filter;
        
    }

    
    
}]);