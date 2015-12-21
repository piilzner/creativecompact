var app = angular.module('app', ['ngRoute', 'wu.masonry']);
app.config(function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'www/views/home.html',
		controller: 'homeCtrl'
	})
    .when('/articles',{
        templateUrl: "www/views/articles.html",
        controller: "articlesCtrl"
    })
    .when('/articles/article/:id',{
        templateUrl: "www/views/article.html",
        controller: "articleCtrl"
    })
    .when('/projects',{
        templateUrl: "www/views/projects.html",
        controller: "projectsCtrl"
    })
    .when('/projects/project/:id',{
        templateUrl: "www/views/project.html",
        controller: "projectCtrl"
    })
    .when('/about',{
        templateUrl: "www/views/about.html",
        controller: "aboutCtrl"
    })
    .when('/404',{
        templateUrl: "www/views/404.html"
    })
    .when('/contact',{
        templateUrl: "www/views/contact.html",
        controller: "contactCtrl"
    }).otherwise({ redirectTo: '/404' });
});
