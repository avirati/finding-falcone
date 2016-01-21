'use strict'

angular.module('findingFalconeApp.routes')
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/find-falcone');

		$stateProvider
			.state('findFalcone', {
				url: "/find-falcone",
				templateUrl: 'views/pages/find-falcone.html',
				controller: 'ctrl.findFalcone'
			})
	}]);
