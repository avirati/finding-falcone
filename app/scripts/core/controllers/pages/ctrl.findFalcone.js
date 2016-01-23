'use strict';

angular.module('findingFalconeApp')
	.controller('ctrl.findFalcone', [ '$scope', 'httpFactory', function ($scope, httpFactory) {
		$scope.msg = 'hello 2';

		window.scope = $scope;
		//$scope variables
		angular.extend($scope, {
			selectedDesinations: {},
			selectedPlanets: [],

			selectedPods: {},
			selectedVehicles: []
		})

		//$scope methods
		angular.extend($scope, {
			getDestinations: function () {
				httpFactory.getDestinations()
					.success(function (data) {
						$scope.destinations = data;
					})
			},
			getVehicles: function () {
				httpFactory.getVehicles()
					.success(function (data) {
						$scope.vehicles = data;
					})
			},
			updatePlanets: function (planet) {
				$scope.selectedPlanets = Object.keys($scope.selectedDesinations)
					.map(function (k) {
						return $scope.selectedDesinations[k];
					})
					.filter(function (o) {
						return o !== undefined && o !== null;
					})
			},
			updateVehicles: function (vehicle) {
				$scope.selectedVehicles = Object.keys($scope.selectedPods)
					.map(function (k) {
						return $scope.selectedPods[k];
					})
					.filter(function (o) {
						return o !== undefined && o !== null;
					})
			},
			startSearch: function () {
				httpFactory.getToken()
					.success(function (data) {
						data.planet_names = [];
						data.vehicle_names = [];
						httpFactory.find(data)
							.success(function (_data) {
								console.log(_data);
							})
					})
			},
			init: function () {
				$scope.getDestinations();
				$scope.getVehicles();
			}
		})

		$scope.init();
	}]);
