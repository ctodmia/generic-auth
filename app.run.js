(function () {

	'use-strict';

	angular.module('genericAuth')
		.run(['$rootScope', 'authService', 'authManager', 'lock', function($rootScope, authService, authManager, lock) {

	      // Intercept the hash that comes back from authentication
	      // to ensure the `authenticated` event fires

	      $rootScope.authService = authService;

	      lock.interceptHash();
	      authService.registerAuthenticationListener();

	    }]);
})();