'use strict';

describe("Unit: Testing Directives", function () {

	describe("Click out Directive:", function () {
		var $compile, $rootScope, $scope;

		beforeEach(module('findingFalconeApp.directives'));

		beforeEach( inject( function (_$compile_, _$rootScope_) {

			$compile = _$compile_;

			$rootScope = _$rootScope_;

		}));

		it('should call clickOut function when we click the second button', function () {
			$scope = $rootScope.$new(true); //Create Isolated Scope

			$scope.clickOut = jasmine.createSpy('clickOut');

			var element = $compile('<div><button click-out="clickOut()">Button 1</button><button>Button 2</button></div>')($scope);
			angular.element(document.body).append(element);
			$scope.$digest();

			element.children()[0].click();
			$scope.$digest();

			expect($scope.clickOut).not.toHaveBeenCalled();

			element.children()[1].click();
			$scope.$digest();

			expect($scope.clickOut).toHaveBeenCalled();
		});
	});
});