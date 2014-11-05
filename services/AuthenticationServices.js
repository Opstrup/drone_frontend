'use strict'

angular
    .module('frontend.AuthenticationServices', [])
    .factory('AuthenticationServices',['$location', 'CRUDServiceDrone',function($location, CRUDServiceDrone){
        return {

            /**
              * Checks if user authorized.
              * Redirects to home if user is authorized.
              **/
            authenticationUser: function(username, password){
              CRUDServiceDrone.get('/api/users/?format=json').success(function(data, status, headers, config) {
                  // this callback will be called asynchronously
                  // when the response is available
                  data.forEach(function(obj)
                  {
                    if(obj.user_name == username)
                      {
                        if(obj.password == password)
                        {
                          $location.path('/home');
                        }
                      }
                   });
              });
            }
        }
    }]);
