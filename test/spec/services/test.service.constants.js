'use strict';


describe("Unit: Testing Services", function () {

	describe("Constants Service:", function () {
		var constants;

		beforeEach(module('findingFalconeApp.services'));

		beforeEach( inject( function (_constants_) {
			constants = _constants_;
		}));

		it('should contain a constants Service', function () {
			expect(constants).not.toEqual(null);
		});

		it('should have NUM_MAX_DESTINATION as 4', function () {
			expect(constants.NUM_MAX_DESTINATION).toEqual(4);
		});

	});
});