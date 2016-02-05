'use strict'

/**
 * @author Avinash Verma
 *
 * Renders header of the Application
 * @example
 * <falcone-header></falcone-header> //it renders the header template
 *
 * @param N/A
 */
angular.module('findingFalconeApp.directives')
	.directive('falconeHeader', [ function () {
		return {
			restrict: 'E',
			templateUrl: 'views/common/templates/header.html'
		}
	}])
