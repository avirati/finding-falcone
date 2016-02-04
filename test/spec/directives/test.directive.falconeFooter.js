'use strict'

describe("Unit: Testing Directives", function () {

	describe("Footer Element:", function () {
		var $scope, elem, compiledElem;

		beforeEach(module('findingFalconeApp.directives'));
		beforeEach(module('htmlTemplates'));

		beforeEach( inject( function ($compile, $rootScope) {

			$scope = $rootScope.$new();

			elem = angular.element('<falcone-footer></falcone-footer>');

			compiledElem = $compile(elem)($scope);

			$rootScope.$digest();

		}));

		it('should check if the element was loaded', function () {
			expect(compiledElem).not.toEqual(null);
		})

		it('should check whether this project was made with ♥ ;)', function () {
			expect(compiledElem.find('div.footer-copyright').html().trim().indexOf('♥')).toBeGreaterThan(-1);
		})
	});
});