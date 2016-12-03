/**
 * app.js
 */
(function() {

	var app = angular.module("ng-angular-autocomplete", [ // <br/>

	// plugins
	'ui.router', // <br/>
	'ngAnimate', // <br/>
	'ui.bootstrap', // <br/>

	// components
	'ng-angular-autocomplete.components.autocomplete',

	// angular basics
	'ng-angular-autocomplete.routes', // <br/>
	'ng-angular-autocomplete.services', // <br/>
	'ng-angular-autocomplete.controllers', // <br/>
	'ng-angular-autocomplete.directives', // <br/>
	'ng-angular-autocomplete.directives', // <br/>

	// funcs
	'ng-angular-autocomplete.home', // <br/>
	'ng-angular-autocomplete.countries', // <br/>
	'ng-angular-autocomplete.cities', // <br/>
	'ng-angular-autocomplete.states', // <br/>

	]);

})();