'use strict'

/**
 * @author Avinash Verma
 *
 * Renders footer of the Application
 * @example
 * <falcone-footer></falcone-header> //it renders the footer template
 *
 * @param N/A
 */
angular.module('findingFalconeApp.directives')
	.directive('falconeFooter', [ function () {
		return {
			restrict: 'E',
			templateUrl: 'views/common/templates/footer.html'
		}
	}]);
