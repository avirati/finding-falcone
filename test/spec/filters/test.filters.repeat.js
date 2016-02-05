'use strict';

describe("Unit: Testing Filters", function () {

	describe("Repeat Filter:", function () {
		var $filter;

		beforeEach(module('findingFalconeApp.filters'));

		beforeEach( inject( function (_$filter_) {
			$filter = _$filter_;
		}));

		it('should contain a repeat Filter', function () {
			expect($filter('repeat')).not.toEqual(null);
		});

		it('should generate an array of length 5', function () {
			expect($filter('repeat')([], 1, 5).length).toEqual(5);
		});

	});
});