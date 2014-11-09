'use strict';

angular
  .module('frontend')
  .controller('homeCtrl', ['$scope', 'DroneServices', 'MapServices', function($scope, DroneServices, MapServices) {
    $scope.title = "Home";
    $scope.droneStatus = "";
    var mapCenterLatitude = 56.172280736338074;
    var mapCenterLongitude = 10.191149711608887;

    $scope.map = MapServices.initMap(mapCenterLatitude, mapCenterLongitude);
    $scope.options = {scrollwheel: false};
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

    // $scope.waypointList = MapServices.drawWaypointsMarker();

    /********* Trash code *************/
     var createRandomMarker = function (i, idKey) {
            if (idKey == null) {
                idKey = "id";
            }

            var latitude = 56.171211605108816;
            var longitude = 10.191653966903687;
            var ret = {
                latitude: latitude,
                longitude: longitude,
                title: 'm' + i
            };
            ret[idKey] = i;
            return ret;
        };
        $scope.randomMarkers = [];

        var markers = [];
        for (var i = 0; i < 2; i++) {
          markers.push(createRandomMarker(i))
        }
        $scope.waypointList = markers;

}]);
