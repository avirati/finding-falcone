'use strict';

angular.module('findingFalconeApp')
	.controller('ctrl.main', [ '$scope', 'constants', function ($scope, constants) {
		$scope.msg = 'hello';

		//$scope variables
		angular.extend($scope, {
			maxDestinations: constants.NUM_MAX_DESTINATION
		})

		//$scope methods
		angular.extend($scope, {
			init: function () {

			}
		})

		$scope.init();

	}]);
