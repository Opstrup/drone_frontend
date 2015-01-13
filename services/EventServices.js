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
        theEvent.error_code = 2;

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
      },

      /*
       * Validates that the event is filled out
       * correct.
       */
      validateEvent: function(user, waypointList, theEvent)
      {
        if (user.id === undefined || user.id === null){
          alert("You need to be logged in to save events");
          return false;
        } else if (waypointList.length > 10){
          alert("Maximum ten waypoints");
          return false;
        } else if (theEvent.name === "" || theEvent.comment === ""){
          alert("Please fill out eventname and/or comment");
          return false;
        } else if (theEvent.name === undefined || theEvent.comment === undefined){
          alert("Please fill out eventname and/or comment");
          return false;
        } else if (waypointList.length < 1){
          alert("Event needs minimum one waypoint");
          return false;
        }

        for (var i = 0; i < waypointList.length; i++) {
          if (waypointList[i].height === 0){
            alert("Height can't be 0m");
            return false;
          }
        }
        
        // angular.forEach(waypointList, function(waypoint){
        //   if (waypoint.height === 0){
        //     alert("Height can't be 0m");
        //     return false;
        //   };
        // })

        return true;
      },

    }
  }]);
