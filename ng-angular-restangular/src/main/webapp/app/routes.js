/**
 * routes.js
 */
(function() {

	var app = angular.module("ng-angular-restangular.routes", []);

	app.config(function($urlRouterProvider) {
		$urlRouterProvider.otherwise("/home");
	});
	
	

})();