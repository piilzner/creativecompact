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
          title : "projekt 3",
          desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, omnis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, omnis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, omnis..",
          image : "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fc406c30756703.563141cd14610.png"
          
      },
      {
          title : "projekt 3",
          desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, omnis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, omnis..",
          image : "https://mir-s3-cdn-cf.behance.net/project_modules/1400/aa2c2b27964909.5636d81d30a60.jpg"
          
      },
      {
          title : "projekt 3",
          desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, omnis..",
          image : "https://scontent-arn2-1.xx.fbcdn.net/hphotos-xpt1/v/t35.0-12/12287191_10153118972746916_1754428541_o.jpg?oh=df2d5fe59afa174ebf49171514ec2bbc&oe=5657AFF0"
          
      }
      
  ];
    
    console.log($scope.projects);
    
}]);