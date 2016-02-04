'use strict'

describe("Unit: Testing Directives", function () {

	describe("Footer Element:", function () {
		var $scope, elem;

		beforeEach(module('findingFalconeApp.directives'));
		beforeEach(module('htmlTemplates'));

		beforeEach( inject( function ($compile, $rootScope) {

			$scope = $rootScope.$new();

			elem = $compile('<falcone-footer></falcone-footer>')($scope);
			$rootScope.$digest();

		}));

		it('should check if the element was loaded', function () {
			expect(elem).not.toEqual(null);
		})

		it('should check whether this project was made with ♥ ;)', function () {
			expect(elem.find('div.footer-copyright').html().trim().indexOf('♥')).toBeGreaterThan(-1);
		})
	});
});