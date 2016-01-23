'use strict'

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
