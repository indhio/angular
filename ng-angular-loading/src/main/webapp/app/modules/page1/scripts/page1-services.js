/**
 * home-service.js
 */
(function() {

	var app = angular.module('ng-angular-loading.page1.services', []);

	app.factory('page1Service', [ '$log', '$http', 'appConfig', function($log, $http, appConfig) {
		var service = {};

		service.timelines = function() {
			return $http.get(appConfig.baseUrl + "/home/timelines/");
		}

		service.minhasProximasEscalas = function() {
			return $http.get(appConfig.baseUrl + "/home/minhasProximasEscalas/");
		}

		service.minhasAnterioresEscalas = function() {
			return $http.get(appConfig.baseUrl + "/home/minhasAnterioresEscalas/");
		}

		service.notificacoesPublicas = function() {
			return $http.get(appConfig.baseUrl + "/home/notificacoesPublicas/");
		}

		service.notificacoesPessoais = function() {
			return $http.get(appConfig.baseUrl + "/home/notificacoesPessoais/");
		}

		return service;
	} ]);

})();