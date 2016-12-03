/**
 * states-controllers.js
 */
(function() {
	'use strict';

	var app = angular.module('ng-angular-autocomplete.states.controllers', []);

	app.controller('StatesController', [ '$scope', function($scope) {

		$scope.domain = {
			country : undefined
		}

	} ]);

})();
