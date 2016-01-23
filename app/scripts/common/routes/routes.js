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
			.state('expeditionResult', {
				url: "/result",
				templateUrl: 'views/pages/result.html',
				controller: 'ctrl.result',
				params: {
					result: null,
					total_time: null
				}
			})
	}]);
