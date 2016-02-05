'use strict';

/**
 * @author Avinash Verma
 *
 * Entry Point of the Application
 *
 * @example N/A
 *
 * @param {Scope} $scope: scope of the container
 * @param {Constants} constants: constants service
 */
angular.module('findingFalconeApp')
	.controller('ctrl.main', [ '$scope', 'constants', function ($scope, constants) {

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
