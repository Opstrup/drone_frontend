/*
 * This class stores information about the 
 * user when he logs in to the system
 */

'use strict'

angular.module('frontend')
  .factory('UserServices', [function(){
    var _user = { id: null, first_name: null, isLoggedIn: false };

    return{

      /*
       * Gets the stored user in local mem.
       */
      getUser: function()
      {
        return _user;
      },

      /*
       * Sets the logged in user in local mem.
       */
      setUser: function(user_id, first_name)
      {
        _user.id = user_id;
        _user.first_name = first_name;
        _user.isLoggedIn = true;
      }

    }
  }]);
