/**
 * page2-module.js
 */
(function() {

	angular.module('ng-angular-loading.page2', [ 'ng-angular-loading.page2.services', 'ng-angular-loading.page2.controllers' ])

	.config(function($stateProvider) {

		$stateProvider.state("page2", {
			url : "/page2",
			templateUrl : 'app/modules/page2/views/page2.html',
			controller : 'Page2Controller',
		})

	})

})();