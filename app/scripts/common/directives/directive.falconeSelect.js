'use strict'

angular.module("findingFalconeApp.directives")
	.directive("falconeSelect", [function () {
		return {
			restrict: 'E',
			scope: {
				repeatOn: '=',
				falconeModel: '=',
				excludeItems: '='
			},
			templateUrl: 'views/common/templates/falcone-select.html',
			link: function (scope, elem, attrs) {
				scope.label = attrs.label;
				scope.placeholder = attrs.placeholder;
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
