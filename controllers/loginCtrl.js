/*
 * This class handels the logic behind the login
 * function
 */

'use strict';

angular
    .module('frontend')
    .controller('loginCtrl', ['$scope', 'AuthenticationServices', function($scope, AuthenticationServices) {
    $scope.title = "Login";

    $scope.onLogIn = function() {
      AuthenticationServices.authenticationUser($scope.username, $scope.password)
    }

  }]);
