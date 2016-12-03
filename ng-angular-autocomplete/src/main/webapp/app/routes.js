/**
 * routes.js
 */
(function() {

	var app = angular.module("ng-angular-autocomplete.routes", []);

	app.config(function($urlRouterProvider) {
		$urlRouterProvider.otherwise("/home");
	});

})();