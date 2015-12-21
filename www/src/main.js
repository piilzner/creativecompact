var app = angular.module('app', ['ngRoute', 'wu.masonry']);
app.config(function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'www/views/home.html',
		controller: 'homeCtrl'
	})
    .when('/articles',{
        templateUrl: "www/views/articles.html",
        controller: "articlesCtrl"
    })
    .when('/articles/article/:id',{
        templateUrl: "www/views/article.html",
        controller: "articleCtrl"
    })
    .when('/projects',{
        templateUrl: "www/views/projects.html",
        controller: "projectsCtrl"
    })
    .when('/projects/project/:id',{
        templateUrl: "www/views/project.html",
        controller: "projectCtrl"
    })
    .when('/about',{
        templateUrl: "www/views/about.html",
        controller: "aboutCtrl"
    })
    .when('/404',{
        templateUrl: "www/views/404.html"
    })
    .when('/contact',{
        templateUrl: "www/views/contact.html",
        controller: "contactCtrl"
    }).otherwise({ redirectTo: '/404' });
});

app.directive('footer', function() {
  return {
    restrict: 'E',
    controller: ['$scope', function($scope){
        
      
           
        
    }],
    templateUrl: 'www/views/partial/footer.html'
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
    templateUrl: 'www/views/partial/menubar.html'
  };
    

    
    
});
app.controller('aboutCtrl', ["$scope", function($scope){
    $('body').scrollTop(0,0);
    
      $scope.workers = [
      {
          name : "Filip Ramstedt",
          title : "Developer",
          image : "www/img/avatar/filip.jpg",
          desc : "Console ninja. Kan allt som har med kod att göra och älskar javascript mer än någonting annat på denna jord",
          email : "filip@creativecompact.se"
          
      },
      {
          name : "Nils Löfgren",
          title : "Designer",
          image : "www/img/avatar/nils.jpg",
          desc : "CSS guru. En perfektionist vars ögon blöder om inte lite animationer eller rätt färgkombinationer finns med.",
          email : "nils@creativecompact.se"
          
      },
      {
          name : "Oskar Stålstierna",
          title : "Project manager",
          image : "www/img/avatar/oskar.jpg",
          desc : "Extrem chailatte drickare som kan dö för retro manbags och stockholm stad. Organiserad och punktlig tack vare google calender",
          email : "oskar@creativecompact.se"
          
      }
          
  ];


    
}]);
app.controller('articleCtrl', ["$scope", "$routeParams", "articles", function($scope, $routeParams, articles){
    
     $('body').scrollTop(0,0);
    
    var currentId = $routeParams.id;
     
   $scope.articles = articles.getArticle(currentId);
    
    
    console.log($scope.articles);
    
    
    
    
    
}]);
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
app.controller('contactCtrl', ["$scope", function($scope){
    
    $('body').scrollTop(0,0);
    
    
    
    $('.send').click(function(){
       
    
        
        $('.message-sucess').css('right', "0");
        
        setTimeout(function(){
          $('.message-sucess').css('right', '-320px');
        }, 3000);
        
        
        
    });
    
}]);
app.controller('homeCtrl', ["$scope", "projects", function($scope, projects){
    
    $('body').scrollTop(0,0);
    
     $scope.projects = projects.getProjects();
    
    console.log($scope.projects);
    
    
    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
    
    
    
}]);
app.controller('projectCtrl', ["$scope", "$routeParams", "projects", function($scope, $routeParams, projects){
    $('body').scrollTop(0,0);
    
    var currentId = $routeParams.id;
     
   $scope.projects = projects.getProject(currentId);
    
    
    $(window).scroll(function(){
       
         
        
        if ($(window).scrollTop() >= $('.project-img').height) {
         
            $('.proj-content').css({
                'position' : 'fixed'
            })
            
        }else{
            $('.proj-content').css({
                'position' : 'relative'
            });
        }
        
        console.log($('.proj-container').height);
    });
    
    
    
    
}]);
app.controller('projectsCtrl', ["$scope", "$http", "projects", function($scope, $http, projects){
    
    $('body').scrollTop(0,0);
   
    $scope.projects = projects.getProjects();
    
    console.log($scope.projects);
    
}]);
app.factory('articles', function() {
	
    
    var articles = [
      {
          title : "Piilzners boilerplate",
          desc : "Piilzners boilerplate är en Angular.JS filstruktur som inkluderar gulp, Angular.JS, jQuery, Bootstrap och Font-awesome. Ett smidigt sätt när man startar ett nytt projekt. Det är bara clona projektet från github och man är igång. ",
          image : "www/img/pbp.jpg",
          date : "12-12-2015",
          author : "Nils Löfgren",
          site : "https://github.com/piilzner/Boilerplate-for-AngularJS",
          genre : [
              "kod"
          ]
          
      },
      {
          title : "Ari´s Gold",
          desc : "Ari´s Gold är resultatet av ett kul sidoprojekt. Tanken var att göra en rolig öl-etikett design och jag valde Ari Gold från 'Entourage'. Hade denna öl funnits i butik hade jag inte tvekat 1 sekund att köpa den.  ",
          image : "www/img/beer.jpg",
          date : "12-12-2015",
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
      
      //happnings
      {
          company: "happnings",
          genre: "webb/mobil",
          title : "happnings",
          thumb : "www/img/project/happnings/thumb.jpg",
          desc : 
            "happnings är en applikation som listar alla event i din stad på en central plats. Ett enkelt sätt att se vad som händer omkring dig. Användaren kan söka på stad, kategori, datum, titel, mm för att snabbt hitta ett event. Du kan även gilla för att få en notifiering dagen innan för att inte glömma bort vad du vill gå på. Idén är att göra det lättare för användarna att hitta event samt för arrangörerna att nå ut till en bredare publik än tidigare.  ",
          
          coverImage : "www/img/project/happnings/cover.jpg",
          tools : "Photoshop, Angular, Ionic",
          date : "15/11-2015",
          site : "http://happnings.se/",
          images : [
              "www/img/project/happnings/projImage.jpg"
          ]
      },
      
      //dotlist
      {
          company: "DotList",
          genre: "mobil",
          title : "DotList",
          thumb : "www/img/project/dotlist/thumb.png",
          desc : 
            "DotList är en mobilapplikation där användaren kan skapa inköpslistor eller att-göra-listor. Enkelt lägga till och uppdatera sina listor och synka dem med vänner eller respektive.  ",
          
          coverImage : "www/img/project/dotlist/cover.jpg",
          tools : "Photoshop, illustrator, Angular, Ionic",
          date : "15/6-2015",
          site : "",
          images : [
              "www/img/project/dotlist/projImage.jpg"
          ]
      },
      
      //Bjorkeberg
      {
          company: "Björkebergs hembygdsförening",
          genre: "webb",
          title : "Björkeberg.com",
          thumb : "www/img/project/bjorkeberg/thumb.jpg",
          desc : 
            "Björkebergs hembyggdsförening ville ha en uppfräschning på sin tidigare statiska html-sida. Dem ville att den skulle vara enkel att uppdatera och lägga till nytt innehåll vilket gjorde att vi valde wordpress som verktyg i detta projekt. ",
          
          coverImage : "www/img/project/bjorkeberg/cover.jpg",
          tools : "Photoshop, Wordpress",
          date : "15/11-2014",
          site : "http://www.bjorkeberg.com",
          images : [
              "www/img/project/bjorkeberg/projImage.jpg"
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