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
      initWaypointsMarker: function()
      {
        return {
                  id: 1,
                }
      },

      /**
       * Draws all the waypoints for the drone on the map.
       * Input: waypoint array
       **/
      drawWaypointsMarker: function()
      {
        return  [
                  {
                    latitude: 56.171211605108816,
                    longtitude: 10.191653966903687,
                    title: "title1",
                    id: 1
                    // icon: "http://icons.iconarchive.com/icons/ncrow/mega-pack-1/16/Yahoo-Messenger-icon.png"
                  },
                  {
                    latitude: 56.171360926901414,
                    longtitude: 10.190484523773193,
                    title: "title2",
                    id: 2
                    // icon: "http://icons.iconarchive.com/icons/ncrow/mega-pack-1/16/Yahoo-Messenger-icon.png"
                  }
                ]
      },


    }
  }]);
