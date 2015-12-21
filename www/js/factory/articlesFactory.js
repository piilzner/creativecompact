app.factory('articles', function() {
	
    
    var articles = [
      {
          title : "Piilzners boilerplate",
          desc : "Piilzners boilerplate är en Angular.JS filstruktur som inkluderar gulp, Angular.JS, jQuery, Bootstrap och Font-awesome. Ett smidigt sätt när man startar ett nytt projekt. Det är bara clona projektet från github och man är igång. ",
          image : "www/img/pbp.jpg",
          date : "12-12-2015",
          author : "Nils Löfgren",
          site : "https://github.com/piilzner/Boilerplate-for-AngularJS",
          genre : [
              "kod"
          ]
          
      },
      {
          title : "Ari´s Gold",
          desc : "Ari´s Gold är resultatet av ett kul sidoprojekt. Tanken var att göra en rolig öl-etikett design och jag valde Ari Gold från 'Entourage'. Hade denna öl funnits i butik hade jag inte tvekat 1 sekund att köpa den.  ",
          image : "www/img/beer.jpg",
          date : "12-12-2015",
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