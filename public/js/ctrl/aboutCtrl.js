app.controller('aboutCtrl', ["$scope", function($scope){
    $('body').scrollTop(0,0);

    /* creativecompact workers */
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

  ];



}]);
