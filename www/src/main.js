var app = angular.module('app', ['ngRoute']);
app.config(function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'www/views/home.html',
		controller: 'homeCtrl'
	})
    .when('/articles',{
        templateUrl: "www/views/articles.html",
        controller: "articlesCtrl"
    })
    .when('/projects',{
        templateUrl: "www/views/projects.html",
        controller: "projectsCtrl"
    })
    .when('/about',{
        templateUrl: "www/views/about.html",
        controller: "aboutCtrl"
    })
    .when('/contact',{
        templateUrl: "www/views/contact.html",
        controller: "contactCtrl"
    }).otherwise({ redirectTo: '/' });
});

app.controller('aboutCtrl', ["$scope", function($scope){
    
    
      


    
}]);
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
app.controller('contactCtrl', ["$scope", function($scope){
    
    
    
    
}]);
app.controller('homeCtrl', ["$scope", function($scope){
    
    
    
    
}]);
app.controller('projectsCtrl', ["$scope", "$http", function($scope, $http){
    
   
   
  $scope.projects = [
      {
          title : "projekt 1",
          desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, omnis.",
          image : "https://mir-s3-cdn-cf.behance.net/project_modules/1400/d16e1331347365.565338b887be5.jpg"
          
      },
       {
          title : "projekt 2",
          desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, omnis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, omnis.r.",
          image : "https://mir-s3-cdn-cf.behance.net/project_modules/1400/122bd430936877.5639eed7b547c.jpg"
          
      },
       {
          title : "projekt 3",
          desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, omnis..",
          image : "https://mir-s3-cdn-cf.behance.net/project_modules/disp/34a3a822981559.5636d13aa78de.gif"
          
      },
      {
          title : "projekt 4",
          desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, omnis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, omnis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, omnis..",
          image : "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fc406c30756703.563141cd14610.png"
          
      },
      {
          title : "projekt 5",
          desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, omnis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, omnis..",
          image : "https://mir-s3-cdn-cf.behance.net/project_modules/1400/aa2c2b27964909.5636d81d30a60.jpg"
          
      },
      {
          title : "projekt 6",
          desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, omnis..",
          image : "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6abfa631214855.56461983caf7f.jpg"
          
      }
      
  ];
    
    console.log($scope.projects);
    
}]);
app.directive('menubar', function() {
  return {
    restrict: 'E',
    controller: ['$scope', function($scope){
        
    }],
    templateUrl: 'www/views/partial/menubar.html'
  };
});