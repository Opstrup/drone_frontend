'use strict'

angular
  .module('frontend.MapServices', [])
  .factory('MapServices',['GoogleMapApi'.ns(), function(GoogleMapApi){
    return{

      /**
       * Initialize the map on the page.
       * Zoom level is 17.
       * (The higher zoom level is the more zoom)
       **/
      initMap: function()
      {
        return  {
                  center: {
                    latitude: 56.172280736338074,
                    longitude: 10.191149711608887
                  },
                  zoom: 17,
                }

      },

      /**
       * Updates map center.
       **/
      updateMap: function(centerLatitude, centerLongitude)
      {
        return {
                center: {
                  latitude: centerLatitude,
                  longitude: centerLongitude
                },
                zoom: 17
              };
      },

      /**
       * Initialize the mark for the drone.
       * Drone marke will always have id: 0.
       **/
      initDroneMarker: function()
      {
        return {
                  id: 0,
                }
      },

      /**
       * Mark where the given drone is on the map.
       * Drone marke will always have id: 0.
       **/
      updateDroneMarker: function(droneLatitude, droneLongitude)
      {
        return {
                  coords:
                        {
                          latitude: droneLatitude,
                          longitude: droneLongitude
                        },
                  icon: "https://dl.dropboxusercontent.com/u/4950226/indoor-hull-ardrone-large.jpg"
                }
      },

      /**
       * Draws all the waypoints for the drone on the map.
       * Input: waypoint array
       **/
      drawWaypointsMarker: function(waypointArray)
      {
        var createWaypoints = function(i, latitude, longitude, idKey)
        {
          if (idKey == null)
            {
              idKey = "id";
            }

          var latitude = latitude;
          var longitude = longitude;

          var returnValue = {
              latitude: latitude,
              longitude: longitude,
              title: 'Waypoint ' + i
          };
          returnValue[idKey] = i;
          return returnValue;
        };

       var waypoints = [];
       for (var i = 0; i < waypointArray.length; i++) {
         waypoints.push(createWaypoints(i, waypointArray[i].latitude, waypointArray[i].longitude))
       }

       return waypoints;
      },

    }
  }]);
