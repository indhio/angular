/**
 * home-module.js
 */
(function() {

	angular.module('ng-angular-autocomplete.home', [ 'ng-angular-autocomplete.home.controllers' ])

	.config(function($stateProvider) {

		$stateProvider.state("home", {
			url : "/home",
			templateUrl : 'app/modules/home/views/home.html',
			controller : 'HomeController',
		});

	})

})();