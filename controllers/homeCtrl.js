/*
 * This class handels the logic behind the home
 * function
 */

'use strict';

angular
  .module('frontend')
  .controller('homeCtrl', ['$scope', 'DroneServices', 'MapServices', 'EventServices', 'WaypointServices', 'UserServices', function($scope, DroneServices, MapServices, EventServices, WaypointServices, UserServices) {
    $scope.title = "Home";
    $scope.map = MapServices.initMap();
    $scope.droneMarkerView = MapServices.initDroneMarker();
    $scope.waypointList = [];
    $scope.waypointListView = [];
    $scope.eventList = [];
    $scope.noDroneSelected = true;
    $scope.eventName;
    $scope.user = UserServices.getUser();

    /*
     * Click event.
     * Triggers: Click on map
     * Updates: Drone information and draws new waypoints on map
     */
    $scope.events = {
      click: function (map, eventName, handlerArgs) {
        if (eventName === 'click' && $scope.noDroneSelected === false) {
            /*
             * Create new event for google maps
             */
            var waypointView = {
              id: $scope.waypointListView.length + 1,
              latitude: handlerArgs[0].latLng.lat(),
              longitude: handlerArgs[0].latLng.lng(),
            };

            /*
             * Create new event for database
             */
            var waypoint = {
              id: $scope.waypointListView.length + 1,
              latitude: handlerArgs[0].latLng.lat(),
              longitude: handlerArgs[0].latLng.lng(),
              height: 0,
              take_photo: false,
              event_id: null
            };

        $scope.$apply(function () {
          $scope.waypointListView.push(waypointView);
          $scope.waypointList.push(waypoint);
        });
        }
      }
    }

    DroneServices.getAllDrones().then(function(allDronesInSystem){
      $scope.allDrones = allDronesInSystem;
    });

    /*
     * Click event.
     * Triggers: Click on drone table
     * Updates: Drone information, waypoints on map and the list of available
     */
    $scope.updateView = function(nextEventID, droneID){
      $scope.noDroneSelected = false;
      $scope.eventInformation = {};

      DroneServices.getSingleDroneInfo(droneID).then(function(droneInformation){

        $scope.droneInformation = droneInformation;
        if(droneInformation.next_event > 0)
        {
          EventServices.getEventForDrone(droneInformation.next_event).then(function(eventInformation){
            $scope.eventInformation = eventInformation;
          });
        }

        $scope.droneMarkerView = MapServices.updateDroneMarker(droneInformation.latitude, droneInformation.longitude);
        $scope.map = MapServices.updateMap(droneInformation.latitude, droneInformation.longitude);
      });

      WaypointServices.getWaypoints(nextEventID).then(function(waypointList){

        $scope.waypointList = waypointList;
        if(waypointList.length >= 1){
          $scope.waypointListView = MapServices.drawWaypointsMarker(waypointList);
        } else {
          $scope.waypointListView = [];
        }
      });
    }

    /*
     * Click event.
     * Triggers: Click on save event btn
     * Updates: Posts new event to database
     * with 
     */
    $scope.sendWaypoints = function(){
      if(EventServices.validateEvent($scope.user, $scope.waypointList, $scope.eventInformation)){
        var droneID = $scope.droneInformation.id;
        var userID = $scope.user.id;
        
        EventServices.postEvent($scope.eventInformation, droneID, userID).then(function(){
          EventServices.getEventList().then(function(eventList){
            var newEventID = eventList.length;
            WaypointServices.postWaypoints($scope.waypointList, newEventID).then(function(){
              DroneServices.notifyDrone($scope.droneInformation, newEventID).then(function(){
                alert("Success");
              });
            });
          });
        });
      }
    }
    
}]);
