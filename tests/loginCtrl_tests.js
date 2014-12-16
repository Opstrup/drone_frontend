/*
 * Unit test file for loginCtrl
 */

'use strict';

describe('Controller test: loginCtrl', function(){

  // Load the module
  beforeEach(module('frontend'));

  var loginCtrl;
  var scope;
  var authServices;

  // Mocking AuthenticationServices
  beforeEach(function () {
        authServices = {
            authenticationUser: function (username, password) {
            }
        };
    });

  // Injecting mocks and rootScope in controller before each test
  beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        loginCtrl = $controller('loginCtrl', {
            $scope: scope,
            AuthenticationServices: authServices
        });
    }));

  it('Title should be Login', function(){
    expect(scope.title).toBe('Login');
  });

  it('authenticationUser method should be called on login', function () {
        spyOn(authServices, 'authenticationUser');

        scope.onLogIn();

        expect(authServices.authenticationUser).toHaveBeenCalled();
  });

});
