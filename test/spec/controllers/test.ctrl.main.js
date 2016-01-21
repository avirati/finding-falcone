'use strict';

describe('Controller: ctrl.main', function () {

	// load the controller's module
	beforeEach(module('findingFalconeApp'));

	var MainCtrl,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		MainCtrl = $controller('ctrl.main', {
			$scope: scope
			// place here mocked dependencies
		});
	}));

	it('should run simple test', function () {
		expect(scope.msg).toBe('hello');
	});
});
