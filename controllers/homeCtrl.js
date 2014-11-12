'use strict';

angular
  .module('frontend')
  .controller('homeCtrl', ['$scope', 'DroneServices', 'MapServices', 'BootstrapServices', function($scope, DroneServices, MapServices, BootstrapServices) {
    $scope.title = "Home";
    $scope.map = MapServices.initMap();
    $scope.droneMarkerView = MapServices.initDroneMarker();
    $scope.tooltipMsg = BootstrapServices.tooltipMessage();
    $scope.waypointList = [];
    $scope.waypointListView = [];
    $scope.noDroneSelected = true;

    $scope.events = {
      click: function (map, eventName, handlerArgs) {
        if (eventName === 'click') {
          console.log("waypointListView lenght " + $scope.waypointListView.length);
              var loc = {
                id: $scope.waypointListView.length + 1,
                latitude: handlerArgs[0].latLng.lat(),
                longitude: handlerArgs[0].latLng.lng(),
              };
        }
        $scope.$apply(function () {
          // console.log(loc);
          $scope.waypointListView.push(loc);
          $scope.waypointList.push(loc);
        });
      }
    }

    DroneServices.getAllDrones().then(function(allDronesInSystem){
      $scope.allDrones = allDronesInSystem;
    });

    $scope.updateView = function(nextEventID, droneID){
      $scope.noDroneSelected = false;
      DroneServices.getSingleDroneInfo(droneID).then(function(droneInformation){

        $scope.droneInformation = droneInformation;

        $scope.droneMarkerView = MapServices.updateDroneMarker(droneInformation.latitude, droneInformation.longitude);
        $scope.map = MapServices.updateMap(droneInformation.latitude, droneInformation.longitude);
      });

      DroneServices.getWaypoints(nextEventID).then(function(waypointList){

        $scope.waypointList = waypointList;
        if(waypointList.length > 1){
          $scope.waypointListView = MapServices.drawWaypointsMarker(waypointList);
        } else {
          $scope.waypointListView = [];
        }
      });
    }


}]);
