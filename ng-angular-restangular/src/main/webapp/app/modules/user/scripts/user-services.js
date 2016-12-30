/**
 * user-services.js
 */
(function() {

	var app = angular.module('ng-angular-restangular.user.services', []);

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

		return service;
	} ]);	
	

})();