'use strict'

/**
 * @author Avinash Verma
 *
 * Renders radio options
 * @example
 * <falcone-select falcone-model="objToPreselect" repeat-on="collection"
 *      label="labelToShowFromData" placeholder="placeholderToShow" exclude-items="itemsToDisableInTheList" ></falcone-select>
 *
 *
 *
 * @param {falconeModel} objToPreselect: Preselects objToPreselect in the list
 *
 * @param {repeatOn} collection: Iterates on this list and renders the element
 *
 * @param {label} labelToShowFromData: For every 'obj' in 'collection' it will
 * look for obj[labelToShowFromData] and that will be what the select list shows
 *
 * @param {placeholder} placeholderToShow: This will be the placeholder for select box
 *
 * @param {excludeItems} itemsToDisableInTheList: any items in this list will be disabled in the list
 *
 */
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
