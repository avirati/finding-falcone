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

		httpFactory.getToken = function () {
			return $http({
				method: 'POST',
				url: BASE_URL + 'token',
				headers: {
					'Accept': 'application/json'
				}
			})
		}

		httpFactory.find = function (json) {
			return $http({
				method: 'POST',
				url: BASE_URL + 'find',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				data: json
			})
		}

		return httpFactory;
	}])
