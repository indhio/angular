/**
 * app.js
 */
(function() {

	var app = angular.module("ng-angular-restangular", [ // <br/>

	// plugins
<<<<<<< HEAD
	'ngRoute', // <br/>
	'ngAnimate', // <br/>
	'ui.router', // <br/>
	'ui.bootstrap', // <br/>
	'restangular', // <br/>
=======
	'ui.router', // <br/>
>>>>>>> origin/master
	'ng.httpLoader', // <br/>

	'ng-angular-restangular.routes', // <br/>
	'ng-angular-restangular.services', // <br/>
	'ng-angular-restangular.controllers', // <br/>

	'ng-angular-restangular.home', // <br/>
	'ng-angular-restangular.user', // <br/>
	'ng-angular-restangular.task', // <br/>

	]);

<<<<<<< HEAD
=======
	app.config([ 'httpMethodInterceptorProvider', function(httpMethodInterceptorProvider) {
		httpMethodInterceptorProvider.whitelistDomain('indhio.com');
		httpMethodInterceptorProvider.whitelistDomain('github.com');
		httpMethodInterceptorProvider.whitelistLocalRequests();
	} ]);

>>>>>>> origin/master
})();