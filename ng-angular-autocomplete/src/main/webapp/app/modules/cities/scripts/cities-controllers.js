/**
 * cities-controllers.js
 */
(function() {
	'use strict';

	var app = angular.module('ng-angular-autocomplete.cities.controllers', []);

	app.controller('CitiesController', [ '$scope', function($scope) {

		$scope.domain = {
			city : undefined
		}

	} ]);

})();
