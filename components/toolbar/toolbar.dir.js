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

		.controller('toolbarController', ['authService', 'store', '$location', function(authService, store, $location){
				var vm = this;
				vm.login = login;
				vm.logout = logout;
				vm.authService = authService;

				function login () {
					// auth.signin({}, function(profile, token) {
					// 	store.set('profile', profile);
					// 	store.set('id_token', token);
					// 	$location.path('/home');
					// }, function(err) {
					// 	console.log('This is a login err', err);
					// });
				}

				function logout () {
					store.remove('profile');
					store.remove('id_token');
					authService.logout();
					$location.path('/home')
				}
		}])
})();