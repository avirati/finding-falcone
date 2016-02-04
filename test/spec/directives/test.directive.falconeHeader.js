'use strict'

describe("Unit: Testing Directives", function () {

	describe("Header Element:", function () {
		var $scope, elem, compiledElem;

		beforeEach(module('findingFalconeApp.directives'));
		beforeEach(module('htmlTemplates'));

		beforeEach( inject( function ($compile, $rootScope) {

			$scope = $rootScope.$new();

			elem = angular.element('<falcone-header></falcone-header>');

			$compile(elem)($scope);

			$rootScope.$digest();

		}));

		it('should', function () {
			console.log(compiledElem);
		})



	});
});