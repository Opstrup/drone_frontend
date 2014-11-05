'use strict'

/**
 *	CRUD service:
 *	Takes url and returns operation.
 **/

angular
    .module('frontend.CRUDservices', [])
    .factory('CRUDServiceDrone',['$http', function($http){
        var serverAddress = "http://127.0.0.1:8000";
        
        return {
          get: function(url)
          {
            return $http.get(serverAddress + url);
          },

          put: function()
          {
          	console.log("PUT from api");
          },

          post: function()
          {
          	console.log("POST from api");
          },

          delete: function()
          {
          	console.log("DELETE from api");
          }
      }
    }]);
