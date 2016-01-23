'use strict'

angular.module("findingFalconeApp.directives")
	.directive("falconeOptions", [function () {
		return {
			restrict: 'E',
			scope: {
				repeatOn: '=',
				identifier: '='
			},
			templateUrl: 'views/common/templates/falcone-options.html',
			link: function (scope, elem, attrs) {
				scope.label = attrs.label;
			},

			controller: function ($scope, $timeout) {

				angular.extend($scope, {

				})
			}
		}
	}]);
