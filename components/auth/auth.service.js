(function () {
	'use strict';

	angular.module('genericAuth')

		.service('authService', ['$rootScope', 'lock', 'authManager', function($rootScope, lock, authManager) {
			var userProfile = JSON.parse(localStorage.getItem('profile')) || {};

			function login() {
				lock.show();
			}

			function logout() {
				localStorage.removeItem('id_token');
				localStorage.removeItem('profile');
				authManager.unauthenticate();
				userProfile = {};
			}

			function registerAuthenticationListener() {
				lock.on('authenticated', function(authResult) {
					localStorage.setItem('id_token', authResult.idToken);
					authManager.authenticate();
					lock.getProfile(authResult.idToken, function(error, profile) {
			          if (error) {
			            console.log(error);
			          }

			          localStorage.setItem('profile', JSON.stringify(profile));
			          $rootScope.$broadcast('userProfileSet', profile);
					});

				});
			}

			return {
				userProfile: userProfile,
				login: login,
				logout: logout,
				registerAuthenticationListener: registerAuthenticationListener
			}
		}])
})();