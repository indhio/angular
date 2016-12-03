/**
 * cities-module.js
 */
(function() {

	angular.module('ng-angular-autocomplete.cities', [ 'ng-angular-autocomplete.cities.controllers' ])

	.config(function($stateProvider) {

		$stateProvider.state("cities", {
			url : "/cities",
			templateUrl : 'app/modules/cities/views/cities.html',
			controller : 'CitiesController',
		});

	})

})();