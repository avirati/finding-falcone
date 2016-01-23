'use strict'

angular.module("findingFalconeApp.directives")
	.directive("falconeOptions", [ '$timeout', function ($timeout) {
		return {
			restrict: 'E',
			scope: {
				repeatOn: '=',
				identifier: '=',
				falconeModel: '=',
				onChange: '&'
			},
			templateUrl: 'views/common/templates/falcone-options.html',
			link: function (scope, elem, attrs) {
				scope.label = attrs.label;
			},

			controller: function ($scope, $timeout) {
				var seletedVehicle;

				angular.extend($scope, {
					update: function (o) {
						if(seletedVehicle) {
							seletedVehicle.total_no++;
						}

						seletedVehicle = o;

						if(o.total_no > 0) {
							o.total_no--;

							$scope.falconeModel = o;
							$timeout(function () {
								$scope.onChange.call(null, o);
							})
						}
					}
				})
			}
		}
	}]);
