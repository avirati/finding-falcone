'use strict';

describe("Unit: Testing Controllers", function () {

	describe("Find Falcone Controller:", function () {
		var $scope, createController, $state, $httpBackend, httpFactory;

		beforeEach(module('findingFalconeApp'));
		beforeEach(module('htmlTemplates'));

		beforeEach(inject(function ($rootScope, _$controller_, _$state_, _$httpBackend_, _httpFactory_) {

			$scope = $rootScope.$new();
			$state = _$state_;
			$httpBackend = _$httpBackend_;
			httpFactory = _httpFactory_;

			createController = function() {
				return _$controller_('ctrl.findFalcone', {
					$scope: $scope
				});
			};
		}));

		it('should check if scope was created', function () {
			createController();
			expect($scope).not.toEqual(null);
		});

		it('should check if $state was injected', function () {
			createController();
			expect($state).not.toEqual(null);
		});

		it('should check if httpFactory was injected', function () {
			createController();
			expect(httpFactory).not.toEqual(null);
		});

		it('should check if init calls getDestinations', function () {
			createController();
			$scope.getDestinations = jasmine.createSpy('getDestinations');
			$scope.init();
			expect($scope.getDestinations).toHaveBeenCalled();
		});

		it('should check if init calls getVehicles', function () {
			createController();
			$scope.getVehicles = jasmine.createSpy('getVehicles');
			$scope.init();
			expect($scope.getVehicles).toHaveBeenCalled();
		});

		it('should check if', function () {
			createController();

			$httpBackend.expect('GET', 'https://findfalcone.herokuapp.com/planets')
					.respond(200, [{
						name: 'Some Planet',
						distance: 100
					}]);

			$httpBackend.expect('GET', 'https://findfalcone.herokuapp.com/vehicles')
					.respond(200, [{
						name: 'Some Vehicle',
						total_no: 2,
						max_distance: 200,
						speed: 2
					}]);

			expect($httpBackend.flush).not.toThrow();

			it('getDestination sets the $scope.destinations', function () {
				expect($scope.destinations).not.toEqual(null);
				expect($scope.destinations.length).toEqual(1);
			});

			it('getVehicles sets the $scope.vehicles', function () {
				expect($scope.vehicles).not.toEqual(null);
				expect($scope.vehicles.length).toEqual(1);
			});
		});
	});
});