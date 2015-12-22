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
<<<<<<< HEAD:public/js/factory/projectsFactory.js
              "img/project/dotlist/projImage.jpg",
              "https://mir-s3-cdn-cf.behance.net/project_modules/hd/19551931720889.565dff2ae3e6f.jpg"
=======
              "www/img/project/happnings/projImage.jpg"
>>>>>>> master:www/js/factory/projectsFactory.js
          ]
      },
      //dotlist
      {
          company: "DotList",
          genre: "mobil",
          title : "DotList",
          thumb : "img/project/dotlist/thumb.png",
          desc : 
            "DotList är en mobilapplikation där användaren kan skapa inköpslistor eller att-göra-listor. Enkelt lägga till och uppdatera sina listor och synka dem med vänner eller respektive.  ",
          
<<<<<<< HEAD:public/js/factory/projectsFactory.js
          coverImage : "img/project/dotlist/cover.jpg",
          tools : "Photoshop, Angular, Ionic",
          date : "15/11-2015",
          site : "http://happnings.se/",
=======
          coverImage : "www/img/project/dotlist/cover.jpg",
          tools : "Photoshop, illustrator, Angular, Ionic",
          date : "15/6-2015",
          site : "",
>>>>>>> master:www/js/factory/projectsFactory.js
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
            "Björkebergs hembyggdsförening ville ha en uppfräschning på sin tidigare statiska html-sida. Dem ville att den skulle vara enkel att uppdatera och lägga till nytt innehåll vilket gjorde att vi valde wordpress som verktyg i detta projekt. ",
          
          coverImage : "www/img/project/bjorkeberg/cover.jpg",
          tools : "Photoshop, Wordpress",
          date : "15/11-2014",
          site : "http://www.bjorkeberg.com",
          images : [
<<<<<<< HEAD:public/js/factory/projectsFactory.js
              "img/project/happnings/cover.jpg",
              "img/project/bjorkeberg/cover.jpg"
=======
              "www/img/project/bjorkeberg/projImage.jpg"
>>>>>>> master:www/js/factory/projectsFactory.js
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