/*
 * This class handels all logic behind drone handling
 * The class uses the CRUDServiceDrone class to communicate to 
 * the server
 */

'use strict'

angular.module('frontend')
    .factory('DroneServices',['CRUDServiceDrone', '$log', '$q', function(CRUDServiceDrone, $log, $q){
        return{

          /*
           * Gets all drones in the system.
           * Uses the CRUD Service to do the asynchronous get request.
           */
          getAllDrones: function()
          {
            var deffered = $q.defer();
            CRUDServiceDrone.get('/api/drones/?format=json')
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
           * Gets a single drone in the system.
           * Uses the CRUD Service to do the asynchronous get request.
           */
          getSingleDroneInfo: function(droneID)
          {
            var deffered = $q.defer();
            CRUDServiceDrone.get('/api/drones/' + droneID + '/?format=json')
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
           * Notifyes the drone when a new
           * event is created for the drone
           */
          notifyDrone: function(drone, eventID)
          {
            var droneID = drone.id;
            drone.next_event = eventID;

            var deffered = $q.defer();
            CRUDServiceDrone.put('/api/drones/' + droneID + '/', drone)
              .success(function(data) {
                deffered.resolve(data);
              })
              .error(function(msg, code) {
                deffered.reject(msg);
                $log.error(msg, code);
              });
            return deffered.promise;
          },

        }
    }]);
