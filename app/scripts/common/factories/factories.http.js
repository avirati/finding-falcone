'use strict'

angular.module('findingFalconeApp.factories')
	.factory('httpFactory', ['$http', function ($http) {
		var httpFactory;
		var BASE_URL;

		httpFactory = {};
		BASE_URL = 'https://findfalcone.herokuapp.com/';

		httpFactory.getDestinations = function () {
			return $http({
				method: 'GET',
				url: BASE_URL + 'planets'
			})
		}

		httpFactory.getVehicles = function () {
			return $http({
				method: 'GET',
				url: BASE_URL + 'vehicles'
			})
		}

		return httpFactory;
	}])
