/**
 * services.js
 */
(function() {

	var app = angular.module('ng-angular-loading.services', []);

	app.constant('appConfig', {
		context : '/ng-angular-loading/',
		baseUrl : '/ng-angular-loading/rest'
	});

	app.factory('loadingSpinnerInterceptor', function($rootScope, $q, $injector, $timeout) {
		var $http;
		function pendingRequests() {
			$http = $http || $injector.get('$http');
			$timeout(function() {
				$rootScope.loading = $http.pendingRequests.length > 0;
			});
		}
		return {
			request : function(config) {
				pendingRequests();
				return config || $q.when(config);
			},
			requestError : function(rejection) {
				pendingRequests();
				return $q.reject(rejection);
			},
			response : function(response) {
				pendingRequests();
				return response || $q.when(response);
			},
			responseError : function(rejection) {
				pendingRequests();
				return $q.reject(rejection);
			}
		};
	});

	app.config(function($httpProvider) {
		$httpProvider.interceptors.push('loadingSpinnerInterceptor');
	});

})();