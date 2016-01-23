'use strict';

angular.module('findingFalconeApp')
	.controller('ctrl.findFalcone', [ '$scope', '$state', 'httpFactory', function ($scope, $state, httpFactory) {
		window.scope = $scope;
		//$scope variables
		angular.extend($scope, {
			selectedPlanets: [],
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
			startSearch: function () {
				httpFactory.getToken()
					.success(function (data) {
						var totalTime = 0, i;

						data.planet_names = [];
						data.vehicle_names = [];

						for(i = 0; i < $scope.maxDestinations; i++) {
							var planet = $scope.selectedPlanets[i];
							var vehicle = $scope.selectedVehicles[i];

							data.planet_names.push(planet.name);
							data.vehicle_names.push(vehicle.name);

							totalTime += planet.distance / vehicle.speed;
						}

						httpFactory.find(data)
							.success(function (_data) {
								$state.go('expeditionResult', { total_time: totalTime, result: _data})
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
