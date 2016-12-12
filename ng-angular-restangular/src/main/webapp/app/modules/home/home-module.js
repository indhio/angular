/**
 * home-module.js
 */
(function() {

	angular.module('ng-angular-restangular.home', [ 'ng-angular-restangular.home.services', 'ng-angular-restangular.home.controllers' ])

	.config(function($stateProvider) {

		$stateProvider.state("home", {
			url : "/home",
			templateUrl : 'app/modules/home/views/home.html',
			controller : 'HomeController',
		})

	})

})();