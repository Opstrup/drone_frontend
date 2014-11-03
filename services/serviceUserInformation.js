'use strict'

angular
    .module('frontend.services', [])
    .factory('ServiceUserInformation',['$location', 'CRUDServiceDrone',function($location, CRUDServiceDrone){
        return {
            test: function(){
                CRUDServiceDrone.get('http://127.0.0.1:8000/api/users/?format=json').success(function(data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                console.log("Status: " + status);
                console.log(data);
                return data;
              });
            }
        }
    }]);
