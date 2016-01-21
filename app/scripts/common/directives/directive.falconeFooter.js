'use strict'

angular.module('findingFalconeApp.directives')
	.directive('falconeFooter', [ function () {
		return {
			restrict: 'E',
			templateUrl: 'views/common/templates/footer.html'
		}
	}]);
