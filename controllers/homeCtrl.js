'use strict';

angular
  .module('frontend')
  .controller('homeCtrl', ['$scope', 'DroneServices', 'MapServices', function($scope, DroneServices, MapServices) {
    $scope.title = "Home";
    $scope.droneStatus = "";
    var droneLatitude = 56.172280736338074;
    var droneLongitude = 10.191149711608887;
    var mapCenterLatitude = 56.172280736338074;
    var mapCenterLongitude = 10.191149711608887;

    DroneServices.getAllDrones().then(function(allDronesInSystem){
      $scope.allDrones = allDronesInSystem;
    });

    $scope.singleDroneInfo = function(nextEventID, droneID) {
      DroneServices.getWaypoints(nextEventID).then(function(waypointsForDrone){
        $scope.waypointsForDrone = waypointsForDrone;
      });

      DroneServices.getSingleDroneInfo(droneID).then(function(droneInformation){
        $scope.droneInformation = droneInformation;
      });

    };

    $scope.map = MapServices.initMap(mapCenterLatitude, mapCenterLongitude);

    $scope.marker = MapServices.makeDroneMarker(droneLatitude, droneLongitude);

  }]);
