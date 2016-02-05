'use strict';

describe("Unit: Testing Controllers", function () {

	describe("Main Controller:", function () {
		var $scope, createController, constants;

		beforeEach(module('findingFalconeApp'));

		beforeEach(inject(function ($rootScope, _$controller_, _constants_) {

			$scope = $rootScope.$new();
			constants = _constants_;

			createController = function() {
				return _$controller_('ctrl.main', {
					$scope: $scope
				});
			};
		}));

		it('should check if scope was created', function () {
			createController();
			expect($scope).not.toEqual(null);
		});

		it('should check if constants was injected', function () {
			createController();
			expect(constants.NUM_MAX_DESTINATION).not.toEqual(null);
		});

		it('should check if constants.NUM_MAX_DESTINATION is equal to scope.maxDestinations', function () {
			createController();
			expect($scope.maxDestinations).toEqual(constants.NUM_MAX_DESTINATION);
		});
	});
});