/**
 * services.js
 */
(function() {

	var app = angular.module('ng-angular-autocomplete.services', []);

	app.constant('appConfig', {
		context : '/ng-angular-autocomplete/',
		baseUrl : '/ng-angular-autocomplete/rest'
	});

})();