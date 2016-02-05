'use strict'

/**
 * @author Avinash Verma
 *
 * Attached to an element as attribute, this will trigger if click event is detected outside of that element
 * @example
 * <div click-out="doSomething()"></div>
 *
 *
 * @param {clickOut} methodToCall: upon event trigger, methodToCall will be called
 *
 */
angular.module("findingFalconeApp.directives")
	.directive('clickOut', ['$window', '$parse', function ($window, $parse) {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				var clickOutHandler = $parse(attrs.clickOut);

				angular.element($window).on('click', function (event) {
					if (element[0].contains(event.target)) return;
					clickOutHandler(scope, {
						$event: event
					});
					scope.$apply();
				});
			}
		};
	}]);
