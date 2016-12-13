/**
 * user-controllers.js
 */
(function() {
	'use strict';

	var app = angular.module('ng-angular-restangular.user.controllers', []);

<<<<<<< HEAD
	app.controller('UserController', [ 'UserService', '$scope', function(UserService, $scope) {
		var self = this;

		$scope.pager = null;
		$scope.currentPage = 1;
		$scope.numPerPage = 10;
		$scope.maxSize = 5;

		UserService.list().then(function(data) {
			$scope.pager = data;
		});

	} ]);

	app.controller('UserFormController', [ 'UserService', '$scope', '$state', '$stateParams', function(UserService, $scope, $state, $stateParams) {
		var self = this;

		var id = $stateParams.id;

		$scope.user = {};
		UserService.get($stateParams.id).then(function(data) {
			console.log(data);
			$scope.user = data;
		});

		$scope.save = function(user) {
			UserService.save(user).then(function(data) {
				$state.go("user");
			});
		};

=======
	app.controller('UserController', [ 'UserService', function(UserService) {
		var self = this;

>>>>>>> origin/master
	} ]);

})();
