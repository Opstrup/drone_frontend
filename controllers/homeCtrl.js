'use strict';

angular
  .module('frontend')
  .controller('homeCtrl', ['$scope', 'DroneServices', 'GoogleMapApi'.ns(), function($scope, DroneServices, GoogleMapApi) {
    $scope.title = "Home";
    $scope.droneStatus = "";
    var droneLatitude = 56.172280736338074;
    var droneLongitude = 10.191149711608887;


    DroneServices.getAllDrones().then(function(allDronesInSystem){
      $scope.allDrones = allDronesInSystem;
    });

    $scope.singleDroneInfo = function(nextEventID, droneID) {
      DroneServices.getWaypoints(nextEventID).then(function(waypointsForDrone){
        $scope.waypointsForDrone = waypointsForDrone;
      });

      DroneServices.getSingleDroneInfo(droneID).then(function(droneInformation){
        $scope.droneInformation = droneInformation;

          droneLatitude = droneInformation.latitude;
          droneLongitude = droneInformation.longitude;
      });

    };

    $scope.map = {
      center: {
        latitude: droneLatitude,
        longitude: droneLongitude
      },
      zoom: 17
    };

    $scope.marker = {
      id: 0,
      coords: {
        latitude: droneLatitude,
        longitude: droneLongitude
      }
    };

    /*
     * GoogleMapApi is a promise with a
     * then callback of the google.maps object
     *   @pram: maps = google.maps
     */
    GoogleMapApi.then(function(maps) {

    });

  }]);
