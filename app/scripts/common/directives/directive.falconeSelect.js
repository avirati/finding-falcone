angular.module("findingFalconeApp.directives")
	.directive("falconeSelect", ["$timeout", function ($timeout) {
		return {
			restrict: 'A',
			scope: {
				repeatOn: '=',
				falconeModel: '='
			},
			template:   '<option value="" disabled selected>Select</option>' +
						'<option ng-repeat="o in repeatOn" ng-bind="o[label]"></option>',
			link: function (scope, elem, attrs) {
				scope.label = attrs.label;
				scope.$watch('repeatOn', function () {
					if(typeof scope.repeatOn !== typeof undefined) {
						$timeout(function () {
							elem.material_select();
						})
					}
				});


			}
		}
	}]);
