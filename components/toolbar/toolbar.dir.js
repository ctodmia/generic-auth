(function() {
	'use strict';

	angular.module('genericAuth')
		.directive('toolbar', [function () {
			return {
				templateUrl: 'components/toolbar/toolbar.tpl.html',
				controller: 'toolbarController',
				controllerAs: 'toolbar'
			}
		}])

		.controller('toolbarController', [function(){

		}])
})();