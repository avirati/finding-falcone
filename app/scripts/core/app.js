'use strict';

/**
 * @ngdoc overview
 * @name findingFalconeApp
 * @description
 * # findingFalconeApp
 *
 * Main module of the application.
 */

angular.module('findingFalcone.directives', []);
angular.module('findingFalconeApp', [
	'ui.router',
	'findingFalcone.directives'
]);
