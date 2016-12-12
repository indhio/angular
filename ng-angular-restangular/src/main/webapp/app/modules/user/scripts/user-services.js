/**
 * user-services.js
 */
(function() {

	var app = angular.module('ng-angular-restangular.user.services', []);

	app.factory('UserService', [ '$log', '$http', 'appConfig', function($log, $http, appConfig) {
		var service = {};

		return service;
	} ]);

})();