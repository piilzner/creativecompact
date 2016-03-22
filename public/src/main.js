var app = angular.module('app', ['ngRoute', 'wu.masonry']);
app.config(function($locationProvider, $routeProvider) {
    /*$locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });*/

	$routeProvider.when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeCtrl'
	})
    .when('/articles',{
        templateUrl: "views/articles.html",
        controller: "articlesCtrl"
    })
    .when('/articles/article/:id',{
        templateUrl: "views/article.html",
        controller: "articleCtrl"
    })
    .when('/projects',{
        templateUrl: "views/projects.html",
        controller: "projectsCtrl"
    })
    /*.when('/project/:id',{
        templateUrl: "views/project.html",
        controller: "projectCtrl"
    })*/
    .when('/projects/project/:id',{
        templateUrl: "views/project.html",
        controller: "projectCtrl"
    })
    .when('/about',{
        templateUrl: "views/about.html",
        controller: "aboutCtrl"
    })
    .when('/contact',{
        templateUrl: "views/contact.html",
        controller: "contactCtrl"
    }).when('/404',{
        templateUrl: "views/404.html"
    }).otherwise({ redirectTo: '/404' });
});

app.directive('footer', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/partial/footer.html'
  };   
});
app.directive('menubar', function() {
  return {
    restrict: 'E',
    controller: ['$scope', function($scope){
        
        $('.menu-ham').click(function(){
            
            if($('.menu').css('right') == '0px'){
                $('.menu').css('right', '-500px');
                $('.ham-one').css({'background' : '#17a19f', 'transform' : 'rotate(0deg)', 'margin-top' : '0', 'width' : '100%'});
                $('.ham-three').css({'background' : '#17a19f', 'transform' : 'rotate(0deg)', 'margin-top' : '0', 'width' : '100%'});
                $('.ham-two').css('display', 'block');
            }else{
                $('.menu').css('right', '0px');
                 $('.ham-one').css({'background' : '#2b2b2b', 'transform' : 'rotate(-45deg)', 'margin-top' : '27px', 'width' : '70%'});
                $('.ham-two').css('display', 'none');
                $('.ham-three').css({'background' : '#2b2b2b', 'transform' : 'rotate(45deg)', 'margin-top' : '-27px', 'width' : '70%'});
                
            }
        });    
    }],
    templateUrl: 'views/partial/menubar.html'
  };    
});
app.controller('aboutCtrl', ["$scope", function($scope){
    $('body').scrollTop(0,0);
    
      $scope.workers = [
      {
          name : "Filip Ramstedt",
          title : "Developer",
          image : "img/avatar/filip.jpg",
          desc : "Console ninja. Can everything that has to do with code and loves javascript more than anything on this earth",
          email : "filip@creativecompact.se"
          
      },
      {
          name : "Nils Löfgren",
          title : "Designer",
          image : "img/avatar/nils.jpg",
          desc : "CSS guru. A perfectionist whose eyes are bleeding if not a little animations or the right color combinations are included.",
          email : "nils@creativecompact.se"
          
      },
      {
          name : "Oskar Stålstierna",
          title : "Project manager",
          image : "img/avatar/oskar.jpg",
          desc : "Extreme chai latte drinker who can die for retro manbags and Stockholm. Organized and punctual, thanks to Google Calendar",
          email : "oskar@creativecompact.se"
          
      }
          
  ];


    
}]);
app.controller('articleCtrl', ["$scope", "$routeParams", "articles", function($scope, $routeParams, articles){
    $('body').scrollTop(0,0);
    $scope.articles = articles.getArticle($routeParams.id);
}]);
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
app.controller('contactCtrl', ["$scope", function($scope){
    $('body').scrollTop(0,0);
 
    $scope.init = function() {
 
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: new google.maps.LatLng(56.1641 , 14.8811),
                styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
            });
            
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(56.1641 , 14.8811),
                map: map,
                title: 'Creative Compact!'
            });
    }    
    
}]);
app.controller('homeCtrl', ["$scope", "projects", function($scope, projects){
    
    $('body').scrollTop(0,0);
    
    $scope.projects = projects.getProjects();
    
   $("#scroll-down").click(function() {
    $('html, body').animate({
        scrollTop: $("#simple-about").offset().top
    }, 2000);
});
    
}]);
app.controller('projectCtrl', ["$scope", "$routeParams", "projects", function($scope, $routeParams, projects){
    $('body').scrollTop(0,0);
    $scope.test = projects.getProject($routeParams.id);
    
       
    $scope.projects = projects.getProject($routeParams.id);
    
    $(window).scroll(function(){
        if ($(window).scrollTop() >= $('.project-img').height) {
            $('.proj-content').css({'position' : 'fixed'});
        }else{
            $('.proj-content').css({'position' : 'relative'});
        }
    });
  
}]);
app.controller('projectsCtrl', ["$scope", "$http", "projects", function ($scope, $http, projects) {
    $('body').scrollTop(0, 0);
    $scope.projects = projects.getProjects();

    //$scope.filters = "";

    $('.proj-wrapper').masonry({
        itemSelector: '.project-box'
    });

    $scope.setFilter = function (filter) {
        $scope.filters = filter;
    }

}]);
app.factory('articles', function() {
	
    var articles = [
      {
          title : "Piilzners boilerplate",
          desc : "Piilzners boilerplate är en Angular.JS filstruktur som inkluderar gulp, Angular.JS, jQuery, Bootstrap och Font-awesome. Ett smidigt sätt när man startar ett nytt projekt. Det är bara clona projektet från github och man är igång. ",
          image : "img/articles/pbp.jpg",
          date : "27-11-2015",
          author : "Nils Löfgren",
          site : "https://github.com/piilzner/Boilerplate-for-AngularJS",
          genre : [
              "kod"
          ]
          
      },
      {
          title : "Ari´s Gold",
          desc : "Ari´s Gold är resultatet av ett kul sidoprojekt. Tanken var att göra en rolig öl-etikett design och jag valde Ari Gold från 'Entourage'. Hade denna öl funnits i butik hade jag inte tvekat en sekund att köpa den.  ",
          image : "img/articles/beer.jpg",
          date : "13-10-2015",
          author : "Nils Löfgren",
          site : "",
          genre : [
              "design"
          ]
          
      }
      
  ];
   
  return {
    getArticles: function() {
      return articles;
    },
    getArticle: function(index){
      return articles[index];
    }
  };
});
app.factory('projects', function() {
    
  var projects = [
      {
        //Freddy Hale
          company: "Freddy Hale",
          genre: "Web",
          title : "Freddy Hale",
          thumb : "img/project/freddyHale/thumb.jpg",
          desc : "Simple and stylish! Freddy ordered this site with a clear vision of what he wanted and close collaboration resulted in a sleek and sexy product. This webpage has a clear will diminish that fits a modern and innovative artist. We are humbled and proud to have been contracted to help Freddy Hale towards a star on Hollywood Boulevard !",  
          coverImage : "www/img/project/FreddyHale/thumb.jpg",
          tools : "Photoshop, Html, Css3",
          date : "4/3-2016",
          site : "http://freddyhale.com",
          images : [
              "img/project/freddyHale/projImage.jpg"
          ]
      },
      {
        //Creative coast festival
          company: "Creative Coast Festival",
          genre: "Web",
          title : "Creative Coast Festival",
          thumb : "img/project/creativecoast/thumb.jpg",
          desc : "We built a website for the Creative Coast Festival. Creative Coast Festival is a digital festival based in Karlshamn where the exhibitors in the gaming and web genre from around the world come and exhibit their projects.",  
          coverImage : "www/img/project/creativecoast/cover.jpg",
          tools : "Photoshop, Wordpress",
          date : "15/2-2016",
          site : "http://creativecoastfestival.se/",
          images : [
              "img/project/creativecoast/cover.jpg"
          ]
      },
      {
        //Cural
          company: "Cural",
          genre: "Web / Logo",
          title : "Cural",
          thumb : "img/project/cural/thumb.jpg",
          desc : "Cural is an internal project that we worked on in collaboration with Pontus Johansson , Andreas Lindvall and Viktorija Meinoryte. The vision of the project was to create a classic medical website with a twist. We try to challenge traditional ways of thinking and to provide concrete examples Situated knowledge through discussion.",  
          coverImage : "www/img/project/cural/thumb.jpg",
          tools : "Illustrator, Angular, Html, Css3, C#",
          date : "29/2-2016",
          site : "http://magralol.github.io/cural/#/",
          images : [
              "img/project/cural/projImage.jpg"
          ]
      },
      //happnings
      {
          company: "happnings",
          genre: "Web",
          title : "happnings",
          thumb : "img/project/happnings/thumb.jpg",
          desc : "Happnings is an application that lists all events in your city in a central location . An easy way to see what is happening around you . The user can search by city , category, date, title , etc. to quickly find an event. You may also like to have alerted the day before to not forget what you want to go on . The idea is to make it easier for users to find events as well as for the organizers to reach out to a wider audience than before. ",  
          coverImage : "www/img/project/happnings/cover.jpg",
          tools : "Photoshop, Angular, Ionic",
          date : "15/11-2015",
          site : "http://happnings.se/",
          images : [
              "img/project/happnings/projImage.jpg"
          ]
      },
      //dotlist
      {
          company: "DotList",
          genre: "Mobile",
          title : "DotList",
          thumb : "img/project/dotlist/thumb.jpg",
          desc : "DotList is a mobile application which allows users to create shopping lists or to - do lists. Easily add and update their lists and sync them with your friends or family ",
          coverImage : "img/project/dotlist/cover.jpg",
          tools : "Photoshop, Angular, Ionic",
          date : "15/11-2015",
          site : "",
          images : [
              "img/project/dotlist/projImage.jpg"
          ]
      },
      //Bjorkeberg
      {
          company: "Björkebergs hembygdsförening",
          genre: "Web",
          title : "Björkeberg.com",
          thumb : "img/project/bjorkeberg/thumb.jpg",
          desc : 
            "Björkebergs association wanted a refresher on their previously static html page . They wanted it to be easy to update and add new content , which meant that we chose WordPress as a tool in this project. ",
          
          coverImage : "www/img/project/bjorkeberg/cover.jpg",
          tools : "Photoshop, Wordpress",
          date : "15/11-2014",
          site : "http://www.bjorkeberg.com",
          images : [
              "img/project/bjorkeberg/projImage.jpg"
          ]
      }  
  ];
      
  return {
    getProjects: function() {
      return projects;
    },
    getProject: function(index){
      return projects[index];
    }
  };
});