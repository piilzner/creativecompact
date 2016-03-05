app.controller('articlesCtrl', ["$scope", "$http", "articles", function($scope, $http, articles){
  $('body').scrollTop(0,0);
    
  $scope.articles = articles.getArticles();
  $scope.filters = "";  
  
  $('.box-wrapper').masonry({
    itemSelector: '.box'
  });
     
  $scope.setFilter = function(filter){
      $scope.filters = filter;  
  }
  
}]);