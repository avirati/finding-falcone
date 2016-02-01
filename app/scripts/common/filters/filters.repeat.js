'use strict'

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
