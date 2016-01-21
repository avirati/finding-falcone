'use strict';

/**
 * @ngdoc function
 * @name findingFalconeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the findingFalconeApp
 */
angular.module('findingFalconeApp')
	.controller('ctrl.main', [ '$scope', function ($scope) {
		$scope.msg = 'hello';
	}]);
