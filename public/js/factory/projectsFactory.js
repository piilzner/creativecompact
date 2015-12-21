app.factory('projects', function() {
    
  var projects = [
      //happnings
      {
          company: "happnings",
          genre: "webb/mobil",
          title : "happnings",
          thumb : "img/project/happnings/thumb.jpg",
          desc : 
            "happnings är en applikation som listar alla event i din stad på en central plats. Ett enkelt sätt att se vad som händer omkring dig. Användaren kan söka på stad, kategori, datum, titel, mm för att snabbt hitta ett event. Du kan även gilla för att få en notifiering dagen innan för att inte glömma bort vad du vill gå på. Idén är att göra det lättare för användarna att hitta event samt för arrangörerna att nå ut till en bredare publik än tidigare.  ",
          
          coverImage : "www/img/project/happnings/cover.jpg",
          tools : "Photoshop, Angular, Ionic",
          date : "15/11-2015",
          site : "http://happnings.se/",
          images : [
              "img/project/dotlist/projImage.jpg",
              "https://mir-s3-cdn-cf.behance.net/project_modules/hd/19551931720889.565dff2ae3e6f.jpg"
          ]
      },
      //dotlist
      {
          company: "DotList",
          genre: "mobil",
          title : "DotList",
          thumb : "img/project/dotlist/thumb.png",
          desc : 
            "happnings är en applikation som listar alla event i din stad på en central plats. Ett enkelt sätt att se vad som händer omkring dig. Användaren kan söka på stad, kategori, datum, titel, mm för att snabbt hitta ett event. Du kan även gilla för att få en notifiering dagen innan för att inte glömma bort vad du vill gå på. Idén är att göra det lättare för användarna att hitta event samt för arrangörerna att nå ut till en bredare publik än tidigare.  ",
          
          coverImage : "img/project/dotlist/cover.jpg",
          tools : "Photoshop, Angular, Ionic",
          date : "15/11-2015",
          site : "http://happnings.se/",
          images : [
              "img/project/dotlist/projImage.jpg"
          ]
      },
      //Bjorkeberg
      {
          company: "Björkebergs hembygdsförening",
          genre: "webb",
          title : "Björkeberg.com",
          thumb : "img/project/bjorkeberg/thumb.jpg",
          desc : 
            "happnings är en applikation som listar alla event i din stad på en central plats. Ett enkelt sätt att se vad som händer omkring dig. Användaren kan söka på stad, kategori, datum, titel, mm för att snabbt hitta ett event. Du kan även gilla för att få en notifiering dagen innan för att inte glömma bort vad du vill gå på. Idén är att göra det lättare för användarna att hitta event samt för arrangörerna att nå ut till en bredare publik än tidigare.  ",
          
          coverImage : "www/img/project/bjorkeberg/cover.jpg",
          tools : "Photoshop, Angular, Ionic",
          date : "15/11-2015",
          site : "http://www.bjorkeberg.com",
          images : [
              "img/project/happnings/cover.jpg",
              "img/project/bjorkeberg/cover.jpg"
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