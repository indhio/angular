/**
 * routes.js
 */
(function() {

	var app = angular.module("ng-angular-loading.routes", []);

	app.config(function($urlRouterProvider) {
		$urlRouterProvider.otherwise("/page1");
	});
	
	

})();