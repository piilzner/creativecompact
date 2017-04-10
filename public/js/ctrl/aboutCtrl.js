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

      }
      // ,
      // {
      //     name : "Oskar Stålstierna",
      //     title : "Project manager",
      //     image : "img/avatar/oskar.jpg",
      //     desc : "Extreme chai latte drinker who can die for retro manbags and Stockholm. Organized and punctual, thanks to Google Calendar",
      //     email : "oskar@creativecompact.se"
      //
      // }

  ];



}]);
