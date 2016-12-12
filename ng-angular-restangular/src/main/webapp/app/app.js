/**
 * app.js
 */
(function() {

	var app = angular.module("ng-angular-restangular", [ // <br/>

	// plugins
	'ngRoute', // <br/>
	'ngAnimate', // <br/>
	'ui.router', // <br/>
	'ui.bootstrap', // <br/>
	'restangular', // <br/>
	'ng.httpLoader', // <br/>

	'ng-angular-restangular.routes', // <br/>
	'ng-angular-restangular.services', // <br/>
	'ng-angular-restangular.controllers', // <br/>

	'ng-angular-restangular.home', // <br/>
	'ng-angular-restangular.user', // <br/>
	'ng-angular-restangular.task', // <br/>

	]);

})();