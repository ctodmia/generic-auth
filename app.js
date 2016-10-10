angular.module('genericAuth', ['auth0.lock', 'angular-storage', 'angular-jwt', 'ngMaterial', 'ui.router'])

	.config(['$provide', 'lockProvider', '$urlRouterProvider', '$stateProvider', '$httpProvider', 'jwtInterceptorProvider', function($provide, lockProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtInterceptorProvider) {
		
		lockProvider.init({
			domain: 'test-c.auth0.com',
			clientID: 'z2zUHKUYsjJWmmabARuBckEDpyQrHKdi'
		});

		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl:'components/home/home.tpl.html'
			})
			.state('profile', {
				url: '/profile',
				templateUrl: 'components/profile/profile.tpl.html',
				controller: 'ProfileController as User'
			})
	}])



