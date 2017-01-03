/**
 * services.js
 */
(function() {

	var app = angular.module('ng-angular-restangular.services', []);

	app.constant('appConfig', {
		context : '/ng-angular-restangular/',
		baseUrl : '/ng-angular-restangular/rest'
	});

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
	});

	app.config(function(uibDatepickerConfig, uibDatepickerPopupConfig) {
		uibDatepickerConfig.startingDay = 1;
		uibDatepickerConfig.showWeeks = false;
		uibDatepickerPopupConfig.datepickerPopup = 'dd/MM/yyyy';
		uibDatepickerPopupConfig.dateFormat = 'dd/MM/yyyy';
		// uibDatepickerPopupConfig.currentText = 'Hoje';
		// uibDatepickerPopupConfig.clearText = 'Limpar';
		// uibDatepickerPopupConfig.closeText = 'Fechar';
	});

})();