'use strict'

angular
    .module('frontend.MapServices', [])
    .factory('MapServices',['GoogleMapApi'.ns(), function(GoogleMapApi){
        return{

          /**
           * Initialize the map on the page with the given center coords.
           * Zoom level is 17.
           * (The higher zoom level is the more zoom)
           **/
          initMap: function(centerLatitude, centerLongitude)
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
                    coords: {
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
          drawWaypointsMarker: function(waypoints)
          {
            return {
                    coords: {
                      latitude: droneLatitude,
                      longitude: droneLongitude
                    },
                      icon: "https://dl.dropboxusercontent.com/u/4950226/indoor-hull-ardrone-large.jpg"
                    }
          },


        }
    }]);
