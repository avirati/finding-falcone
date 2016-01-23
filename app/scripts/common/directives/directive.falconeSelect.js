'use strict'

angular.module("findingFalconeApp.directives")
	.directive("falconeSelect", ["$timeout", function ($timeout) {
		return {
			restrict: 'E',
			scope: {
				repeatOn: '=',
				falconeModel: '='
			},
			templateUrl: 'views/common/templates/falcone-select.html',
			link: function (scope, elem, attrs) {
				scope.label = attrs.label;
			},

			controller: function ($scope) {
				angular.extend($scope, {
					showFlag: false
				})

				angular.extend($scope, {
					update: function (o) {
						$scope.falconeModel = o;
						$scope.showFlag = false;
					}
				})
			}
		}
	}]);
