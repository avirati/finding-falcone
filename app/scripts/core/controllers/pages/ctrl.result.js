'use strict';

/**
 * @author Avinash Verma
 *
 * Controller of the Result Page
 *
 * @example N/A
 *
 * @param {Scope} $scope: scope of the container
 * @param {StateParams} $stateParams: Service to get the parameters passed during route change
 */
angular.module('findingFalconeApp')
	.controller('ctrl.result', [ '$scope', '$stateParams', function ($scope, $stateParams) {
		//$scope variables
		angular.extend($scope, {

		})

		//$scope methods
		angular.extend($scope, {
			init: function () {
				$scope.result = $stateParams.result;
				$scope.total_time = $stateParams.total_time;
			}
		})

		$scope.init();
	}]);
