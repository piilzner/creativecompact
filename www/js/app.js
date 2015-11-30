var app = angular.module('app', ['ngRoute']);
app.config(function($locationProvider, $routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'www/views/home.html',
		controller: 'homeCtrl'
	})
    .when('/articles',{
        templateUrl: "www/views/articles.html",
        controller: "articlesCtrl"
    })
    .when('/projects',{
        templateUrl: "www/views/projects.html",
        controller: "projectsCtrl"
    })
    .when('/about',{
        templateUrl: "www/views/about.html",
        controller: "aboutCtrl"
    })
    .when('/contact',{
        templateUrl: "www/views/contact.html",
        controller: "contactCtrl"
    }).otherwise({ redirectTo: '/' });
});
