/*
 * This class handels all communication betweend the webapplication
 * and the server.
 */

'use strict'

angular.module('frontend')
    .factory('CRUDServiceDrone', ['$http', function($http){
        var serverAddress = "http://127.0.0.1:8000";

        return {
          get: function(url)
          {
            return $http.get(serverAddress + url);
          },

          put: function(url)
          {
          	console.log("PUT from api");
          },

          post: function(url)
          {
          	console.log("POST from api");
          },

          delete: function(url)
          {
          	console.log("DELETE from api");
          }
      }
    }]);
