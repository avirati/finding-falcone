'use strict'

angular.module('findingFalconeApp.directives')
	.directive('falconeHeader', [ function () {
		return {
			restrict: 'E',
			templateUrl: 'views/common/templates/header.html'
		}
	}])
