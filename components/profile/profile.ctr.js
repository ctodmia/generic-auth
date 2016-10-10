(function () {
	'use strict'

	angular.module('genericAuth')
		.controller('ProfileController', ['$http',  function ($http) {
			var vm = this; 
			vm.message = 'hello';
		}])

})();