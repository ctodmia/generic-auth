angular.module('genericAuth', ['auth0', 'angular-storage', 'angular-jwt', 'ngMaterial', 'ui.router'])

	.config(['$provide', 'authProvider', '$urlRouterProvider', '$stateProvider', '$httpProvider', 'jwtInterceptorProvider', function($provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtInterceptorProvider) {
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



