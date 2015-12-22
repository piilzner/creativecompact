app.factory('articles', function() {
	
    var articles = [
      {
          title : "Piilzners boilerplate",
<<<<<<< HEAD:public/js/factory/articlesFactory.js
          desc : "Piilzners boilerplate är en Angular.JS filstruktur som inkluderar gulp, Angular.JS, jQuery, Bootstrap och Font-awesome.",
          image : "img/pbp.jpg",
          date : "12-12-2015",
=======
          desc : "Piilzners boilerplate är en Angular.JS filstruktur som inkluderar gulp, Angular.JS, jQuery, Bootstrap och Font-awesome. Ett smidigt sätt när man startar ett nytt projekt. Det är bara clona projektet från github och man är igång. ",
          image : "www/img/pbp.jpg",
          date : "27-11-2015",
          author : "Nils Löfgren",
          site : "https://github.com/piilzner/Boilerplate-for-AngularJS",
>>>>>>> master:www/js/factory/articlesFactory.js
          genre : [
              "kod"
          ]
          
      },
      {
          title : "Ari´s Gold",
<<<<<<< HEAD:public/js/factory/articlesFactory.js
          desc : "Som en kul sidoprojekt så gjorde jag en ölflaske-etikett och detta är resultatet.",
          image : "img/beer.jpg",
          date : "12-12-2015",
=======
          desc : "Ari´s Gold är resultatet av ett kul sidoprojekt. Tanken var att göra en rolig öl-etikett design och jag valde Ari Gold från 'Entourage'. Hade denna öl funnits i butik hade jag inte tvekat 1 sekund att köpa den.  ",
          image : "www/img/beer.jpg",
          date : "13-10-2015",
          author : "Nils Löfgren",
          site : "",
>>>>>>> master:www/js/factory/articlesFactory.js
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