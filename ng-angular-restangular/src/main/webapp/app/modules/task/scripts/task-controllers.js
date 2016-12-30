/**
 * home-controllers.js
 */
(function() {
	'use strict';

	var app = angular.module('ng-angular-restangular.task.controllers', []);

	app.controller('TaskController', [ 'TaskService', '$scope', function(TaskService, $scope) {
		var self = this;

		$scope.pager = null;
		$scope.currentPage = 1;
		$scope.numPerPage = 10;
		$scope.maxSize = 5;

		TaskService.list().then(function(data) {
			$scope.pager = data;
		});

	} ]);

	app.controller('TaskFormController', [ 'TaskService', '$scope', '$state', '$stateParams', function(TaskService, $scope, $state, $stateParams) {
		var self = this;

		var id = $stateParams.id;

		$scope.task = {};
		TaskService.get($stateParams.id).then(function(data) {
			$scope.task = data;
		});

		$scope.save = function(task) {
			TaskService.save(task).then(function(data) {
				$state.go("task");
			});
		};

	} ]);

})();
