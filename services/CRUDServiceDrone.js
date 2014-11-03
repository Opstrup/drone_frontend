'use strict'

/**
 *	CRUD service:
 *	Takes url and returns operation.
 **/

angular
    .module('frontend.CRUDservices', [])
    .factory('CRUDServiceDrone',['$http', function($http){
        var CRUDServiceDrone;
        return CRUDServiceDrone = {
          get: function(url)
          {
            return $http.get(url);
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
