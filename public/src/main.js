var app = angular.module('app', ['ngRoute', 'wu.masonry']);
app.config(function($locationProvider, $routeProvider) {
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
app.controller('contactCtrl', ["$scope", "$http", function($scope, $http){
    $('body').scrollTop(0,0);
    
    
    
    
        
       
            // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 16,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(56.1641 , 14.8811), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(56.1641 , 14.8811),
                    map: map,
                    title: 'Snazzy!'
                });
            }
    
    
    
    
    $scope.sendMessage = function() {
        $http.post("/message", {
            email: $scope.email,
            name: $scope.name,
            message: $scope.message
        }).then(function(data){
            if(data.data.error == "novalid"){
                $scope.errormsg = data.data.message;
            }else{
                $scope.email = "";
                $scope.name = "";
                $scope.message = "";
                $scope.errormsg = "";
                $('.message-sucess').css('right', "0");
                setTimeout(function(){
                    $('.message-sucess').css('right', '-320px');
                }, 3000);
            }
        },function() {
            $scope.errormsg = "Ett fel uppstog försök igen!";
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
          desc : "Enkel och stilren! Freddy beställde sidan med en klar vision av vad han ville ha och ett nära sammarbete resulterade i en sleek och sexig produkt. Sidan har en klar kännsla som passar en modern och nyskapande artist. Vi känner oss ödmjuka och stolta att ha fått uppdraget att hjälpa Freddy Hale på vägen mot en stjärna på Hollywood Boulevard!",  
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
          desc : "Vi byggde en webbsida till Creative coast festival i Karlshamn.",  
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
          desc : "Cural är ett internt projekt som vi jobbat med i sammarbete med Pontus Johansson, Andreas Lindvall och Viktorija Meinoryte. Visionen med projektet var att skapa en klassisk läkemedelssida med en twist. Vi försöker att utmana klassiska tankesätt och ge konkret exempel på situerad kunskapen genom diskussion. Det är 50% chans att användaren gillar sidan eller inte. In och titta, uppdatera sidan och se vad som händer!",  
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
          desc : "happnings är en applikation som listar alla event i din stad på en central plats. Ett enkelt sätt att se vad som händer omkring dig. Användaren kan söka på stad, kategori, datum, titel, mm för att snabbt hitta ett event. Du kan även gilla för att få en notifiering dagen innan för att inte glömma bort vad du vill gå på. Idén är att göra det lättare för användarna att hitta event samt för arrangörerna att nå ut till en bredare publik än tidigare.  ",  
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
          desc : "DotList är en mobilapplikation där användaren kan skapa inköpslistor eller att-göra-listor. Enkelt lägga till och uppdatera sina listor och synka dem med vänner eller respektive.  ",
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
            "Björkebergs hembyggdsförening ville ha en uppfräschning på sin tidigare statiska html-sida. Dem ville att den skulle vara enkel att uppdatera och lägga till nytt innehåll vilket gjorde att vi valde wordpress som verktyg i detta projekt. ",
          
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