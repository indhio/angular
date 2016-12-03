/**
 * countries-module.js
 */
(function() {

	angular.module('ng-angular-autocomplete.countries', [ 'ng-angular-autocomplete.countries.controllers' ])

	.config(function($stateProvider) {

		$stateProvider.state("countries", {
			url : "/countries",
			templateUrl : 'app/modules/countries/views/countries.html',
			controller : 'CountriesController',
		});

	})

})();