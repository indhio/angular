/**
 * home-services.js
 */
(function() {

	var app = angular.module('ng-angular-restangular.home.services', []);

	app.factory('HomeService', [ '$log', '$http', 'appConfig', function($log, $http, appConfig) {
		var service = {};

		return service;
	} ]);

})();