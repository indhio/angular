/**
 * app.js
 */
(function() {

	var app = angular.module("ng-angular-restangular", [ // <br/>

	// plugins
	'ui.router', // <br/>
	'ng.httpLoader', // <br/>

	'ng-angular-restangular.routes', // <br/>
	'ng-angular-restangular.services', // <br/>
	'ng-angular-restangular.controllers', // <br/>

	'ng-angular-restangular.home', // <br/>
	'ng-angular-restangular.user', // <br/>
	'ng-angular-restangular.task', // <br/>

	]);

	app.config([ 'httpMethodInterceptorProvider', function(httpMethodInterceptorProvider) {
		httpMethodInterceptorProvider.whitelistDomain('indhio.com');
		httpMethodInterceptorProvider.whitelistDomain('github.com');
		httpMethodInterceptorProvider.whitelistLocalRequests();
	} ]);

})();