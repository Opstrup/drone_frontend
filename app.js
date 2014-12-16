'use strict';

angular
  .module('frontend', [
    'ui.router',
    'uiGmapgoogle-maps',
  ])
  .config(['$urlRouterProvider', '$stateProvider', 'uiGmapGoogleMapApiProvider', function($urlRouterProvider, $stateProvider, GoogleMapApi) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      })
      .state('archive', {
        url: '/archive',
        templateUrl: 'templates/archive.html',
        controller: 'archiveCtrl'
      });

      GoogleMapApi.configure({
            key: 'AIzaSyBpkoDhSFjmB11ANxwUBkT6WUabM_lMZDU',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
      });
  }]);
