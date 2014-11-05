'use strict';

// Declare app level module which depends on views, and components
angular
  .module('frontend', [
    'ui.router',
    'google-maps'.ns(),
    'frontend.AuthenticationServices',
    'frontend.CRUDservices',
    'frontend.DroneServices'
  ])
  .config(['$urlRouterProvider', '$stateProvider', 'GoogleMapApiProvider'.ns(), function($urlRouterProvider, $stateProvider, GoogleMapApi) {
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
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      });

      GoogleMapApi.configure({
            key: 'AIzaSyBpkoDhSFjmB11ANxwUBkT6WUabM_lMZDU',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
  }]);
