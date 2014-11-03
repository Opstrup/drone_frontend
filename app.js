'use strict';

// Declare app level module which depends on views, and components
angular
  .module('frontend', [
    'ui.router',
    'frontend.services',
    'frontend.CRUDservices'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
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
  }]);
