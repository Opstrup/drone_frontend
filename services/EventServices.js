/*
 * This class handels all logic behind event handling
 * The class uses the CRUDServiceDrone class to communicate to 
 * the server
 */

'use strict'

angular.module('frontend')
  .factory('EventServices',['CRUDServiceDrone', '$log', '$q', function(CRUDServiceDrone, $log, $q){
    return{

      /*
       * Gets a single event in the system.
       * Uses the CRUD Service to do the asynchronous get request.
       */
      getEventForDrone: function(nextEvent)
      {
        var deffered = $q.defer();
        CRUDServiceDrone.get('/api/events/' + nextEvent + '/?format=json')
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
       * Gets a single event in the system.
       * Uses the CRUD Service to do the asynchronous get request.
       */
      getEventList: function()
      {
        var deffered = $q.defer();
        CRUDServiceDrone.get('/api/events/?format=json')
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
       * Posts the event
       * Uses the CRUD Service to do the asynchronous post request.
       */
      postEvent: function(theEvent, droneID, userID)
      {
        theEvent.user = [userID];
        theEvent.drone = [droneID];

        var deffered = $q.defer();
        CRUDServiceDrone.post('/api/events/', theEvent)
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
