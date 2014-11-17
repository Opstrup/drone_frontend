'use strict'

angular
  .module('frontend.EventServices', [])
  .factory('EventServices',['CRUDServiceDrone', '$log', '$q', function(CRUDServiceDrone, $log, $q){
    return{

      /**
       * Gets a single event in the system.
       * Uses the CRUD Service to do the asynchronous get request.
       **/
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

      /**
       * Gets a single event in the system.
       * Uses the CRUD Service to do the asynchronous get request.
       **/
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

      /**
       * Posts the event, returns the event in promise.
       * Uses the CRUD Service to do the asynchronous post request.
       **/
      postEvent: function(theEvent)
      {
        console.log(theEvent);
        //Finish the event here and post it
        // var deffered = $q.defer();
        // CRUDServiceDrone.get('/api/drones/' + droneID + '/?format=json')
        //   .success(function(data) {
        //     deffered.resolve(data);
        //   })
        //   .error(function(msg, code) {
        //     deffered.reject(msg);
        //     $log.error(msg, code);
        //   });
        // return deffered.promise;
      }

    }
  }]);
