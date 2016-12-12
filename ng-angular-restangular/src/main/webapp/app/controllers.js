/**
 * controllers.js
 */
(function() {

	var app = angular.module("ng-angular-restangular.controllers", []);

	app.controller('AppController', function($scope, $rootScope, $state) {

		$scope.pageNameSelected = 'home';

		$scope.selectPage = function(name) {
			$scope.pageNameSelected = name;
		};

		$scope.isPageNameSelected = function(value) {
			if (value === $scope.pageNameSelected) {
				return true;
			}
			return false;
		};

	});

})();