'use strict'

/**
 * @author Avinash Verma
 *
 * Service to keep track of Constants in the App
 *
 * @example
 * angular.module('myApp', [])
 *      .controller('ctrl.main', ['$scope', 'constants', function($scope, constants) {
 *
 *          angular.extend($scope, {
 *              maxDestination: constants.NUM_MAX_DESTINATION
 *          })
 *
 *          angular.extend($scope, {
 *              init: function() {
 *                  console.log($scope.maxDestination);
 *              }
 *          })
 *
 *          $scope.init();
 *
 *      }])
 * @param N/A
 */
angular.module('findingFalconeApp.services')
	.service('constants', [ function () {
		return {
			NUM_MAX_DESTINATION: 4
		}
	}])
