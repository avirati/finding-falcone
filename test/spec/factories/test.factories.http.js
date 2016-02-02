'use strict'

describe("Unit: Testing Factories", function () {

	describe("HTTP Factory:", function () {
		var httpFactory, $httpBackend;

		beforeEach(module('findingFalconeApp.factories'));

		beforeEach( inject( function (_httpFactory_, _$httpBackend_) {
			httpFactory = _httpFactory_;
			$httpBackend = _$httpBackend_;
		}));

		it('should contain a httpFactory Factory', function () {
			expect(httpFactory).not.toEqual(null);
		});

		it('should check existence of getDestinations method', function () {
			expect(httpFactory.getDestinations).toBeDefined()
		});

		it('should check existence of getVehicles method', function () {
			expect(httpFactory.getVehicles).toBeDefined()
		});

		it('should check existence of getToken method', function () {
			expect(httpFactory.getToken).toBeDefined()
		});

		it('should check existence of find method', function () {
			expect(httpFactory.find).toBeDefined()
		});

		it('should test getDestinations call', function () {
			var $scope = {};

			httpFactory.getDestinations()
					.success(function (_data_) {
						$scope.response = _data_;
						$scope.valid = true;
					})
					.error(function (_data_) {
						$scope.valid = false;
					})

			$httpBackend.when('GET', 'https://findfalcone.herokuapp.com/planets')
					.respond(200, [{
							name: "Donlon",
							distance: 100
						}])

			expect($httpBackend.flush).not.toThrow();

			expect($scope.valid).toEqual(true);
			expect($scope.response.length).toEqual(1);
			expect($scope.response[0].name).toBeDefined();
			expect($scope.response[0].distance).toBeDefined();
		})

		it('should test getVehicles call', function () {
			var $scope = {};

			httpFactory.getVehicles()
					.success(function (_data_) {
						$scope.response = _data_;
						$scope.valid = true;
					})
					.error(function (_data_) {
						$scope.valid = false;
					})

			$httpBackend.when('GET', 'https://findfalcone.herokuapp.com/vehicles')
					.respond(200, [{
						name: "Space pod",
						total_no: 2,
						max_distance: 200,
						speed: 2
					}])

			expect($httpBackend.flush).not.toThrow();

			expect($scope.valid).toEqual(true);
			expect($scope.response.length).toEqual(1);
			expect($scope.response[0].name).toBeDefined();
			expect($scope.response[0].total_no).toBeDefined();
			expect($scope.response[0].max_distance).toBeDefined();
			expect($scope.response[0].speed).toBeDefined();
		})

		it('should test getToken call', function () {
			var $scope = {};

			httpFactory.getToken()
					.success(function (_data_) {
						$scope.response = _data_;
						$scope.valid = true;
					})
					.error(function (_data_) {
						$scope.valid = false;
					})

			$httpBackend.when('POST', 'https://findfalcone.herokuapp.com/token')
					.respond(200, {
						token: 'SOMERANDOMSTRING'
					})

			expect($httpBackend.flush).not.toThrow();

			expect($scope.valid).toEqual(true);
			expect($scope.response.token).toBeDefined();
		})

		it('should test find call', function () {
			var $scope = {};

			httpFactory.find({
				"token":"SOMERANDOMSTRING",
				"planet_names":["Donlon","Enchai","Jebing","Sapir"],
				"vehicle_names":["Space rocket","Space shuttle","Space ship","Space ship"]
			})
					.success(function (_data_) {
						$scope.response = _data_;
						$scope.valid = true;
					})
					.error(function (_data_) {
						$scope.valid = false;
					})

			$httpBackend.expect('POST', 'https://findfalcone.herokuapp.com/find', {
				"token":"SOMERANDOMSTRING",
				"planet_names":["Donlon","Enchai","Jebing","Sapir"],
				"vehicle_names":["Space rocket","Space shuttle","Space ship","Space ship"]
			})
					.respond(200, {
						success: 'true'
					})

			expect($httpBackend.flush).not.toThrow();

			expect($scope.valid).toEqual(true);
		})

	});
});