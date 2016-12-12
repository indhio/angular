/**
 * task-module.js
 */
(function() {

	angular.module('ng-angular-restangular.task', [ 'ng-angular-restangular.task.services', 'ng-angular-restangular.task.controllers' ])

	.config(function($stateProvider) {

		$stateProvider.state("task", {
			url : "/task",
			templateUrl : 'app/modules/task/views/task.html',
			controller : 'TaskController',
		})

	})

})();