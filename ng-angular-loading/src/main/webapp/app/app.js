/**
 * app.js
 */
(function() {

	var app = angular.module("ng-angular-loading", [ // <br/>

	// plugins
	'ui.router', // <br/>
	'ng.httpLoader', // <br/>

	'ng-angular-loading.routes', // <br/>
	'ng-angular-loading.services', // <br/>
	'ng-angular-loading.controllers', // <br/>

	'ng-angular-loading.page1', // <br/>
	'ng-angular-loading.page2', // <br/>
	'ng-angular-loading.page3', // <br/>
	'ng-angular-loading.page4', // <br/>

	]);

	app.config([ 'httpMethodInterceptorProvider', function(httpMethodInterceptorProvider) {
		httpMethodInterceptorProvider.whitelistDomain('indhio.com');
		httpMethodInterceptorProvider.whitelistDomain('github.com');
		httpMethodInterceptorProvider.whitelistLocalRequests();
	} ]);

})();