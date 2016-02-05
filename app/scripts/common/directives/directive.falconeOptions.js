'use strict';

/**
 * @author Avinash Verma
 *
 * Renders radio options
 * @example
 * <falcone-options falcone-model="objToPreselect" repeat-on="collection" label="labelToShowFromData"
 *      target-planet="planetWhichOwnsThisFleet"></falcone-options>
 *
 *
 *
 * @param {falconeModel} objToPreselect: Preselects objToPreselect in the list
 *
 * @param {repeatOn} collection: Iterates on this list and renders the element
 *
 * @param {label} labelToShowFromData: For every 'obj' in 'collection' it will
 * look for obj[labelToShowFromData] and that will be the radio label
 *
 * @param {planetWhichOwnsThisFleet} This will allow the radio options to perform
 * calculations and validations (such as checking if no more vehicles available)
 */
angular.module("findingFalconeApp.directives")
	.directive("falconeOptions", [ function () {
		return {
			restrict: 'E',
			scope: {
				repeatOn: '=',
				identifier: '=',
				falconeModel: '=',
				targetPlanet: '='
			},
			templateUrl: 'views/common/templates/falcone-options.html',
			link: function (scope, elem, attrs) {
				scope.label = attrs.label;
			},

			controller: function ($scope) {
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
						}
					}
				})
			}
		}
	}]);
