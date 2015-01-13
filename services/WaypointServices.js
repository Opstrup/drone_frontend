/*
 * This class handels all logic behind waypoint handling
 * The class uses the CRUDServiceDrone class to communicate to 
 * the server
 */

'use strict'

angular.module('frontend')
    .factory('WaypointServices',['CRUDServiceDrone', '$log', '$q', function(CRUDServiceDrone, $log, $q){
        return{

          /*
           * Gets all waypoints for an event in the system.
           * Uses the CRUD Service to do the asynchronous get request.
           */
          getWaypoints: function(eventID)
          {
            var deffered = $q.defer();
            CRUDServiceDrone.get('/api/waypointsForEvent/' + eventID + '/?format=json')
              .success(function(data) {
                deffered.resolve(data);
              })
              .error(function(msg, code) {
                deffered.reject(msg);
                $log.error(msg, code);
              });
            return deffered.promise;
          },

          /*
           * Posts the list of waypoints and sets the event ID.
           * Uses the CRUD Service to do the asynchronous post request.
           */
          postWaypoints: function(waypointList, withEventID)
          {
            var deffered = $q.defer();
            angular.forEach(waypointList, function(waypoint){
              waypoint.event_id = withEventID;

              CRUDServiceDrone.post('/api/waypoints/', waypoint)
              .success(function(data) {
                deffered.resolve(data);
              })
              .error(function(msg, code) {
                deffered.reject(msg);
                $log.error(msg, code);
              });
            });
            return deffered.promise;
          }

        }
    }]);
