/**
 * task-services.js
 */
(function() {

	var app = angular.module('ng-angular-restangular.task.services', []);

	app.factory('TaskService', [ '$log', '$http', 'appConfig', function($log, $http, appConfig) {
		var service = {};

		return service;
	} ]);

})();