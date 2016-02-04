'use strict'

describe("Unit: Testing Directives", function () {

	describe("Header Element:", function () {
		var $scope, elem, compiledElem;

		beforeEach(module('findingFalconeApp.directives'));
		beforeEach(module('htmlTemplates'));

		beforeEach( inject( function ($compile, $rootScope) {

			$scope = $rootScope.$new();

			elem = angular.element('<falcone-header></falcone-header>');

			compiledElem = $compile(elem)($scope);

			$rootScope.$digest();

		}));

		it('should check if the element was loaded', function () {
			expect(compiledElem).not.toEqual(null);
		})

		it('should check whether header has "Finding Falcone" written', function () {
			expect(compiledElem.find('a.brand-logo').html().trim()).toEqual('Finding Falcone')
		})
	});
});