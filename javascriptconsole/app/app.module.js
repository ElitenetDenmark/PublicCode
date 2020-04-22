(function () {
	'use strict';

	/* initialize angular */
	angular.module('App', ['ui.bootstrap'])
		.config(['$compileProvider', function ($compileProvider) {
			$compileProvider.debugInfoEnabled(false);
		}])


}());