var app = angular.module('app', ['ngRoute']);
app.config(function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'www/views/home.html',
		controller: 'homeCtrl'
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