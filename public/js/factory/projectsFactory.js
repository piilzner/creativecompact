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