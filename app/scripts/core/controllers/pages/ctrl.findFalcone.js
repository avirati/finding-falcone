'use strict';

angular.module('findingFalconeApp')
	.controller('ctrl.findFalcone', [ '$scope', 'httpFactory', function ($scope, httpFactory) {
		$scope.msg = 'hello 2';

		window.scope = $scope;
		//$scope variables
		angular.extend($scope, {
			selectedDesinations: {}
		})

		//$scope methods
		angular.extend($scope, {
			getDestinations: function () {
				httpFactory.getDestinations()
					.success(function (data) {
						$scope.destinations = data;
					})
			},
			init: function () {
				$scope.getDestinations();
			}
		})

		$scope.init();
	}]);
