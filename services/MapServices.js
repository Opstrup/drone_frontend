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
           * Mark where the given drone is on the map.
           * Drone marke will always have id: 0.
           **/
          makeDroneMarker: function(droneLatitude, droneLongitude)
          {
            return {
                    id: 0,
                    coords: {
                      latitude: droneLatitude,
                      longitude: droneLongitude
                      }
                    }
          },

          
        }
    }]);
