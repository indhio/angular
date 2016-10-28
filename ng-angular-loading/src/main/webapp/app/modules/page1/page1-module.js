/**
 * client-module.js
 */
(function() {

	angular.module('ng-angular-loading.page1', [ 'ng-angular-loading.page1.services', 'ng-angular-loading.page1.controllers' ])

	.config(function($stateProvider) {

		$stateProvider.state("page1", {
			url : "/page1",
			templateUrl : 'app/modules/page1/views/page1.html',
			controller : 'Page1Controller',
		})

	})

})();