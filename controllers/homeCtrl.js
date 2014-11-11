'use strict';

angular
  .module('frontend')
  .controller('homeCtrl', ['$scope', 'DroneServices', 'MapServices', function($scope, DroneServices, MapServices) {
    $scope.title = "Home";
    $scope.map = MapServices.initMap();
    $scope.droneMarker = MapServices.initDroneMarker();
    $scope.waypointList = [];
    $scope.events = {
      click: function (map, eventName, handlerArgs) {
        if (eventName === 'click') {
          var loc = {
            id: _.uniqueId(),
            latitude: handlerArgs[0].latLng.lat(),
            longitude: handlerArgs[0].latLng.lng(),
          };
        }
        $scope.$apply(function () {
          console.log(loc);
          $scope.waypointList.push(loc);
          $scope.waypointsForDrone.push(loc);
        });
      }
    }

    DroneServices.getAllDrones().then(function(allDronesInSystem){
      $scope.allDrones = allDronesInSystem;
    });

    $scope.updateView = function(nextEventID, droneID) {

      DroneServices.getSingleDroneInfo(droneID).then(function(droneInformation){
        $scope.droneInformation = droneInformation;
        $scope.droneMarker = MapServices.updateDroneMarker(droneInformation.latitude, droneInformation.longitude);
        $scope.map = MapServices.updateMap(droneInformation.latitude, droneInformation.longitude);
      });

      DroneServices.getWaypoints(nextEventID).then(function(waypointsForDrone){
        $scope.waypointsForDrone = waypointsForDrone;
        if(waypointsForDrone.length > 1)
        {
          $scope.waypointList = MapServices.drawWaypointsMarker(waypointsForDrone);
        }
        else
        {
          $scope.waypointList = [];
        }
      });
    }

}]);
