'use strict'

angular
    .module('frontend.AuthenticationServices', [])
    .factory('AuthenticationServices',['$location', 'CRUDServiceDrone', '$log', '$q', 'UserServices', function($location, CRUDServiceDrone, $log, $q, UserServices){
        return {

            /**
              * Checks if user authorized.
              * Redirects to home if user is authorized.
              **/
            authenticationUser: function(username, password){

              var getUsers = function ()
              {
                var deffered = $q.defer();
                CRUDServiceDrone.get('/api/users/?format=json')
                  .success(function(data) {
                    deffered.resolve(data);
                  })
                  .error(function(msg, code) {
                    deffered.reject(msg);
                    $log.error(msg, code);
                  });
                return deffered.promise;
              }


              getUsers().then(function(userList){
                angular.forEach(userList, function(user){
                  if(user.user_name === username)
                    {
                      if(user.password === password)
                        {
                          UserServices.setUser(user.id, user.first_name);
                          $location.path('/home');
                        }
                    }
                })
              })
            },

        }
    }]);
