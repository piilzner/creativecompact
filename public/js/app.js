var app = angular.module('app', ['ngRoute', 'wu.masonry']);
app.config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

	$routeProvider.when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeCtrl'
	})
    .when('/articles',{
        templateUrl: "views/articles.html",
        controller: "articlesCtrl"
    })
    .when('/articles/article/:id',{
        templateUrl: "views/article.html",
        controller: "articleCtrl"
    })
    .when('/projects',{
        templateUrl: "views/projects.html",
        controller: "projectsCtrl"
    })
    .when('/projects/project/:id',{
        templateUrl: "views/project.html",
        controller: "projectCtrl"
    })
    .when('/about',{
        templateUrl: "views/about.html",
        controller: "aboutCtrl"
    })
    .when('/contact',{
        templateUrl: "views/contact.html",
        controller: "contactCtrl"
    }).when('/404',{
        templateUrl: "views/404.html"
    }).otherwise({ redirectTo: '/404' });
});
