/**
 * user-services.js
 */
(function() {

	var app = angular.module('ng-angular-restangular.user.services', []);

<<<<<<< HEAD
	app.factory('UserService', [ 'Restangular', function(Restangular) {
		var service = {};
		service.route = "user/";

		service.list = function() {
			return Restangular.one(service.route + "list").get();
		};

		service.get = function(id) {
			return Restangular.one(service.route + id).get();
		};

		service.save = function(user) {
			return Restangular.all(service.route).post(user);
		};
=======
	app.factory('UserService', [ '$log', '$http', 'appConfig', function($log, $http, appConfig) {
		var service = {};
>>>>>>> origin/master

		return service;
	} ]);

})();