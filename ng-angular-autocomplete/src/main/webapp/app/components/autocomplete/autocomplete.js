/**
 * autocomplete.js
 */
(function() {

	var app = angular.module('ng-angular-autocomplete.components.autocomplete', []);

	app.directive('autocompleteCountries', function() { // <autocomplete-countries></autocomplete-countries>
		return {
			restrict : 'E',
			templateUrl : 'app/components/autocomplete/autocomplete-countries.html',
		};
	});
	app.directive('autocompleteCities', function() { // <autocomplete-cities></autocomplete-cities>
		return {
			restrict : 'E',
			templateUrl : 'app/components/autocomplete/autocomplete-cities.html',
		};
	});
	app.directive('autocompleteStates', function() { // <autocomplete-states></autocomplete-states>
		return {
			restrict : 'E',
			templateUrl : 'app/components/autocomplete/autocomplete-states.html',
		};
	});

	app.factory('AutocompleteService', [ '$log', '$http', 'appConfig', function($log, $http, appConfig) {
		var service = {};

		service.countries = function() {
			return $http.get(appConfig.context + 'json/countries.json').success(function(response) {
				return response.data;
			});
		};

		service.cities = function() {
			return $http.get(appConfig.context + 'json/cities.json').success(function(response) {
				return response.data;
			});
		};

		service.states = function() {
			return $http.get(appConfig.context + 'json/states.json').success(function(response) {
				return response.data;
			});
		};

		return service;
	} ]);

	app.controller('AutocompleteCountriesController', [ '$scope', '$http', 'AutocompleteService', function($scope, $http, AutocompleteService) {

		$scope.selected = undefined;

		// get countries
		AutocompleteService.countries().then(function(response) {
			$scope.countries = response.data;
		});

	} ]);

	app.controller('AutocompleteCitiesController', [ '$scope', '$http', 'AutocompleteService', function($scope, $http, AutocompleteService) {

		$scope.selected = undefined;

		// get countries
		AutocompleteService.cities().then(function(response) {
			$scope.cities = response.data;
		});

	} ]);

	app.controller('AutocompleteStatesController', [ '$scope', '$http', 'AutocompleteService', function($scope, $http, AutocompleteService) {

		$scope.selected = undefined;

		// get countries
		AutocompleteService.states().then(function(response) {
			$scope.states = response.data;
		});

	} ]);

})();