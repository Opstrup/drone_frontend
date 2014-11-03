'use strict';

angular
    .module('frontend')
    .controller('loginCtrl', ['$scope', 'ServiceUserInformation', function($scope, ServiceUserInformation) {
    $scope.title = "Login";

    ServiceUserInformation.test();

  }]);