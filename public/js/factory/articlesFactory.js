app.factory('articles', function() {
	
    
    var articles = [
      {
          title : "Piilzners boilerplate",
          desc : "Piilzners boilerplate är en Angular.JS filstruktur som inkluderar gulp, Angular.JS, jQuery, Bootstrap och Font-awesome.",
          image : "img/pbp.jpg",
          date : "12-12-2015",
          genre : [
              "kod"
          ]
          
      },
      {
          title : "Ari´s Gold",
          desc : "Som en kul sidoprojekt så gjorde jag en ölflaske-etikett och detta är resultatet.",
          image : "img/beer.jpg",
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