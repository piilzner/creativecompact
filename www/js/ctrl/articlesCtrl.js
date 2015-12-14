app.controller('articlesCtrl', ["$scope", "$http", function($scope, $http){
    
    
      
$('.box-wrapper').masonry({
  // options
  itemSelector: '.box'
});
    
    
    
  $scope.articles = [
      {
          title : "Piilzners boilerplate",
          desc : "Piilzners boilerplate is a Angular.JS filestructure including, gulp, Angular.JS, jQuery, Bootstrap and font-awesome",
          image : "www/img/pbp.jpg",
          link : "https://github.com/piilzner/Boilerplate-for-AngularJS"
          
      },
      {
          title : "happnings",
          desc : "happnings is a webb / mobile application that lists event on a central place",
          image : "www/img/happnings.jpg",
          link : "http://happnings.se/#/"
          
      },
      {
          title : "DotList",
          desc : "DotList is a mobile app build with the phonegap and cordova framework. You can make lists with tasks or items on it. You can also invite others to youre list.",
          image : "www/img/dotlist.png"
          
      },
      {
          title : "Ari´s Gold",
          desc : "As a fun sideproject i wanted to make a beer label design and this is the result.",
          image : "www/img/beer.jpg"
          
      }
      
  ];
    
    console.log($scope.articles);

    
}]);