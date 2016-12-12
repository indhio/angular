/**
 * task-services.js
 */
(function() {

	var app = angular.module('ng-angular-restangular.task.services', []);

	app.factory('TaskService', [ 'Restangular', function(Restangular) {
		var service = {};
		service.route = "task/";

		service.list = function() {
			return Restangular.one(service.route + "list").get();
		};

		service.get = function(id) {
			return Restangular.one(service.route + id).get();
		};

		service.save = function(task) {
			return Restangular.all(service.route).post(task);
		};

		return service;
	} ]);

})();