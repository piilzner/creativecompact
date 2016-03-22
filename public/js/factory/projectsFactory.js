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