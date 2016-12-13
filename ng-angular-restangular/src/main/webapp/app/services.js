/**
 * services.js
 */
(function() {

	var app = angular.module('ng-angular-restangular.services', []);

	app.constant('appConfig', {
		context : '/ng-angular-restangular/',
		baseUrl : '/ng-angular-restangular/rest'
	});

<<<<<<< HEAD
	app.config([ 'httpMethodInterceptorProvider', function(httpMethodInterceptorProvider) {
		httpMethodInterceptorProvider.whitelistDomain('indhio.com');
		httpMethodInterceptorProvider.whitelistDomain('github.com');
		httpMethodInterceptorProvider.whitelistLocalRequests();
	} ]);

	app.config(function(RestangularProvider, appConfig) {
		RestangularProvider.setBaseUrl(appConfig.baseUrl);
		RestangularProvider.setRestangularFields({
			id : "id"
		});
	});

	app.config(function(uibPaginationConfig) {
		// uibPaginationConfig.firstText = "Primeira";
		// uibPaginationConfig.previousText = 'Anterior';
		// uibPaginationConfig.nextText = 'Próxima';
		// uibPaginationConfig.lastText = 'Última';
	})

	app.config(function(uibDatepickerConfig, uibDatepickerPopupConfig) {
		uibDatepickerConfig.startingDay = 1;
		uibDatepickerConfig.showWeeks = false;
		uibDatepickerPopupConfig.datepickerPopup = 'dd/MM/yyyy';
		uibDatepickerPopupConfig.dateFormat = 'dd/MM/yyyy';
		// uibDatepickerPopupConfig.currentText = 'Hoje';
		// uibDatepickerPopupConfig.clearText = 'Limpar';
		// uibDatepickerPopupConfig.closeText = 'Fechar';
	})
=======
	app.factory('loadingSpinnerInterceptor', function($rootScope, $q, $injector, $timeout) {
		var $http;
		function pendingRequests() {
			$http = $http || $injector.get('$http');
			$timeout(function() {
				$rootScope.loading = $http.pendingRequests.length > 0;
			});
		}
		return {
			request : function(config) {
				pendingRequests();
				return config || $q.when(config);
			},
			requestError : function(rejection) {
				pendingRequests();
				return $q.reject(rejection);
			},
			response : function(response) {
				pendingRequests();
				return response || $q.when(response);
			},
			responseError : function(rejection) {
				pendingRequests();
				return $q.reject(rejection);
			}
		};
	});

	app.config(function($httpProvider) {
		$httpProvider.interceptors.push('loadingSpinnerInterceptor');
	});
>>>>>>> origin/master

})();