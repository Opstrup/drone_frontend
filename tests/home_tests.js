'use strict';

describe('Controller test: homeCtrl', function(){

  // Load the module
  beforeEach(module('frontend'));

  var homeCtrl;
  var scope;
  var droneServices;
  var mapServices;
  var eventServices;
  var waypointServices;

  // Mocking AuthenticationServices
  beforeEach(function () {
        droneServices = {
            authenticationUser: function (username, password) {
            }
        };
        mapServices = {

        };
        eventServices = {

        };
        waypointServices = {

        };
    });

  // Injecting mocks and root in controller before each test
  beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        homeCtrl = $controller('homeCtrl', {
            $scope: scope,
            AuthenticationServices: authServices
        });
    }));

});
