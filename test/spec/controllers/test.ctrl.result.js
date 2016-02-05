'use strict'

describe("Unit: Testing Controllers", function () {

	describe("Result Controller:", function () {
		var $scope, createController, $stateParams;

		beforeEach(module('findingFalconeApp'));

		beforeEach(inject(function ($rootScope, _$controller_, _$stateParams_) {

			$scope = $rootScope.$new();
			$stateParams = _$stateParams_;

			createController = function() {
				return _$controller_('ctrl.result', {
					$scope: $scope
				});
			};
		}));

		it('should check if scope was created', function () {
			createController();
			expect($scope).not.toEqual(null);
		})

		it('should check if $stateParams was injected', function () {
			createController();
			expect($stateParams).not.toEqual(null);
		})

		it('should check if $scope contains data passed from $stateParams', function () {
			createController();

			$stateParams.result = { foo: 'bar' };
			$stateParams.total_time = 100;

			$scope.init();

			expect($scope.result).toEqual({ foo: 'bar' });
			expect($scope.total_time).toEqual(100);

		})
	});
});