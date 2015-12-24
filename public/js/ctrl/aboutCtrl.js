app.controller('aboutCtrl', ["$scope", function($scope){
    $('body').scrollTop(0,0);
    
      $scope.workers = [
      {
          name : "Filip Ramstedt",
          title : "Developer",
          image : "img/avatar/filip.jpg",
          desc : "Console ninja. Kan allt som har med kod att göra och älskar javascript mer än någonting annat på denna jord",
          email : "filip@creativecompact.se"
          
      },
      {
          name : "Nils Löfgren",
          title : "Designer",
          image : "img/avatar/nils.jpg",
          desc : "CSS guru. En perfektionist vars ögon blöder om inte lite animationer eller rätt färgkombinationer finns med.",
          email : "nils@creativecompact.se"
          
      },
      {
          name : "Oskar Stålstierna",
          title : "Project manager",
          image : "img/avatar/oskar.jpg",
          desc : "Extrem chailatte drickare som kan dö för retro manbags och stockholm stad. Organiserad och punktlig tack vare google calender",
          email : "oskar@creativecompact.se"
          
      }
          
  ];


    
}]);