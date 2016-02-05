'use strict'

/**
 * @author Avinash Verma
 *
 * HTTP Factory to provide a reusable mean of calling APIs
 * @example
 * angular.module('myApp', [])
 *      .controller('ctrl.main', ['$scope', 'httpFactory', function($scope, httpFactory) {
 *          httpFactory.getDestinations()
 *              .success( function(_data_) {
 *                  console.log(_data_);
 *              })
 *              .error(function (_err_) {
 *                  console.log(_err_);
 *              })
 *      }])
 *
 *
 * @promise {success} triggers on success of API call
 * @promise {error} triggers on failure of API call
 *
 */
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
