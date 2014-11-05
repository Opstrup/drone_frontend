'use strict'

angular
    .module('frontend.DroneServices', [])
    .factory('DroneServices',['CRUDServiceDrone', '$log', '$q', function(CRUDServiceDrone, $log, $q){
        return{

          /**
           * Gets all drones in the system.
           * Uses the CRUD Service to do the asynchronous get request.
           **/
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
          }
          
        }
    }]);
