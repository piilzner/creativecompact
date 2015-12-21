app.factory('articles', function() {
	
    
    var articles = [
      {
          title : "Piilzners boilerplate",
          desc : "Piilzners boilerplate is a Angular.JS filestructure including, gulp, Angular.JS, jQuery, Bootstrap and font-awesome",
          image : "www/img/pbp.jpg",
          date : "12-12-2015",
          genre : [
              "kod"
          ]
          
      },
      {
          title : "happnings",
          desc : "happnings is a webb / mobile application that lists event on a central place",
          image : "www/img/happnings.jpg",
          date : "12-12-2015",
          genre : [
              "webb",
              "mobil"
          ]
          
      },
      {
          title : "DotList",
          desc : "DotList is a mobile app build with the phonegap and cordova framework. You can make lists with tasks or items on it. You can also invite others to youre list.",
          image : "www/img/dotlist.png",
          date : "12-12-2015",
          genre : [
              "mobil"
          ]
          
      },
      {
          title : "Ari´s Gold",
          desc : "As a fun sideproject i wanted to make a beer label design and this is the result.",
          image : "www/img/beer.jpg",
          date : "12-12-2015",
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