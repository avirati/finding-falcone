'use strict'

/**
 * @author Avinash Verma
 *
 * Custom filter to repeat an element n times
 * @example
 * <div ng-repeat="n in [] | repeat:1:max"></div>     //Will repeat 4 times
 *
 *
 * @param {Number} max: Will loop from 1 till max (max included)
 *
 */
angular.module('findingFalconeApp.filters')
	.filter('repeat', [function () {
		return function (val, start, end) {
			start = parseInt(start);
			end = parseInt(end);
			for (var i = start; i <= end; i++)
				val.push(i);
			return val;
		};
	}]);
