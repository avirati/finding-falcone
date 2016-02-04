'use strict'

describe("Unit: Testing Directives", function () {

	describe("Select Element:", function () {
		var $scope, elem;

		beforeEach(module('findingFalconeApp.directives'));
		beforeEach(module('htmlTemplates'));

		beforeEach( inject( function ($compile, $rootScope) {

			$scope = $rootScope.$new();

			$scope.destinations = [{"name":"Donlon","distance":100},{"name":"Enchai","distance":200},{"name":"Jebing","distance":300},{"name":"Sapir","distance":400},{"name":"Lerbin","distance":500},{"name":"Pingasor","distance":600}];
			$scope.selectedDestinationIndex = 3;

			elem = $compile('<falcone-select class="" falcone-model="destinations[selectedDestinationIndex]" repeat-on="destinations" label="name" placeholder="Select Planet" exclude-items="selectedPlanets" ></falcone-select>')($scope);
			$rootScope.$digest();

		}));

		it('should check if the element was loaded', function () {
			expect(elem).not.toEqual(null);
		})

		it('should check if placeholder text matches', function () {
			expect(elem.find('input')[0].placeholder).toEqual('Select Planet');
		})

		it('should check if the first li shows the placeholder provided', function () {
			expect(elem.find('ul').children(0).children(0).html().trim()).toEqual('Select Planet');   //Deduct 1 for the placeholder li element. (Refer Template)
		})

		it('should check if number of li(s) in the rendered template is equal to number of objects in destinations', function () {
			expect(elem.find('ul').children().length - 1).toEqual(6);   //Deduct 1 for the placeholder li element. (Refer Template)
		})

		it('should check if falcone-model index pre selects the right element', function () {
			expect(elem.find('input')[0].value).toEqual($scope.destinations[$scope.selectedDestinationIndex].name);
		})

		it('should check if falcone-model indexed item is disabled in the dropdown', function () {
			expect(elem.find('ul').children($scope.selectedDestinationIndex + 1).hasClass('disabled')).toEqual(true);
		})
	});
});