'use strict'

describe("Unit: Testing Directives", function () {

	describe("Radio Element:", function () {
		var $scope, elem;

		beforeEach(module('findingFalconeApp.directives'));
		beforeEach(module('htmlTemplates'));

		beforeEach( inject( function ($compile, $rootScope) {

			$scope = $rootScope.$new();

			$scope.vehicles = [{"name":"Space pod","total_no":2,"max_distance":200,"speed":2},{"name":"Space rocket","total_no":1,"max_distance":300,"speed":4},{"name":"Space shuttle","total_no":1,"max_distance":400,"speed":5},{"name":"Space ship","total_no":2,"max_distance":600,"speed":10}]
			$scope.selectedVehicleIndex = 2;

			elem = $compile('<falcone-options falcone-model="vehicles[selectedVehicleIndex]" repeat-on="vehicles" label="name"></falcone-options>')($scope);
			$rootScope.$digest();

		}));

		it('should check if the element was loaded', function () {
			expect(elem).not.toEqual(null);
		})

		it('should check if number of options in the rendered template is equal to number of objects in vehicles', function () {
			expect(elem.children().length).toEqual($scope.vehicles.length);
		})
	});
});