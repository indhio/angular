/**
 * page4-module.js
 */
(function() {

	angular.module('ng-angular-loading.page4', [ 'ng-angular-loading.page4.services', 'ng-angular-loading.page4.controllers' ])

	.config(function($stateProvider) {

		$stateProvider.state("page4", {
			url : "/page4",
			templateUrl : 'app/modules/page4/views/page4.html',
			controller : 'Page4Controller',
		})

	})

})();