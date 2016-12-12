/**
 * user-module.js
 */
(function() {

	angular.module('ng-angular-restangular.user', [ 'ng-angular-restangular.user.services', 'ng-angular-restangular.user.controllers' ])

	.config(function($stateProvider) {

		$stateProvider.state("user", {
			url : "/user",
			templateUrl : 'app/modules/user/views/user.html',
			controller : 'UserController',
		});

		$stateProvider.state("userForm", {
			url : "/userForm/:id",
			templateUrl : 'app/modules/user/views/userForm.html',
			controller : 'UserFormController',
		});

	})

})();