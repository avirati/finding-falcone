'use strict';

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
