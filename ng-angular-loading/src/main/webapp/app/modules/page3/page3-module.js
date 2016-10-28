/**
 * page3-module.js
 */
(function() {

	angular.module('ng-angular-loading.page3', [ 'ng-angular-loading.page3.services', 'ng-angular-loading.page3.controllers' ])

	.config(function($stateProvider) {

		$stateProvider.state("page3", {
			url : "/page3",
			templateUrl : 'app/modules/page3/views/page3.html',
			controller : 'Page3Controller',
		})

	})

})();