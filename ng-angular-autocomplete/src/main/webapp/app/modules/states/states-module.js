/**
 * states-module.js
 */
(function() {

	angular.module('ng-angular-autocomplete.states', [ 'ng-angular-autocomplete.states.controllers' ])

	.config(function($stateProvider) {

		$stateProvider.state("states", {
			url : "/states",
			templateUrl : 'app/modules/states/views/states.html',
			controller : 'StatesController',
		});

	})

})();