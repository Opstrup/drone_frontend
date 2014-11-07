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
    $scope.marker;

    $scope.map = MapServices.initMap(mapCenterLatitude, mapCenterLongitude);
    $scope.marker = MapServices.initDroneMarker();

    DroneServices.getAllDrones().then(function(allDronesInSystem){
      $scope.allDrones = allDronesInSystem;
    });

    $scope.updateView = function(nextEventID, droneID) {

      DroneServices.getSingleDroneInfo(droneID).then(function(droneInformation){
        $scope.droneInformation = droneInformation;
        $scope.marker = MapServices.updateDroneMarker(droneInformation.latitude, droneInformation.longitude);
        $scope.map = MapServices.updateMap(droneInformation.latitude, droneInformation.longitude);
      });

      DroneServices.getWaypoints(nextEventID).then(function(waypointsForDrone){
        $scope.waypointsForDrone = waypointsForDrone;
      });

    }

  }]);
