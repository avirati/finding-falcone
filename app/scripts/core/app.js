'use strict';

angular.module('findingFalconeApp.directives', []);
angular.module('findingFalconeApp.services', []);
angular.module('findingFalconeApp.filters', []);
angular.module('findingFalconeApp.routes', ['ui.router']);

angular.module('findingFalconeApp', [
	'findingFalconeApp.directives',
	'findingFalconeApp.services',
	'findingFalconeApp.filters',
	'findingFalconeApp.routes'
]);
