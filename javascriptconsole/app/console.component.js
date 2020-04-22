(function () {
	'use strict';

	angular.module('App')

		.component('consolecomponent', {
			restrict: "AE",
			replace: true,
			templateUrl: '/app/console_component.html',
			controller: ['$scope', function ($scope) {
				//initialize
				var vm = this;
				vm.console = ["### WELCOME WRITE ANYTHING TO GET STARTED ###", "", "", ""];


				vm.update = function (console) {
					vm.console.shift();
					vm.console.push(console.inputtext);
	
					console.inputtext = "";
				}

			}]
		});




	//end
}());