'use strict'

angular
  .module('frontend.UserServices', [])
  .factory('UserServices',[function(){
    var _user = { id: null, first_name: null, isLoggedIn: false };

    return{
      /**
       * Gets a single event in the system.
       * Uses the CRUD Service to do the asynchronous get request.
       **/
      getUser: function()
      {
        return _user;
      },

      setUser: function(User_id, first_name)
      {
        _user.id = User_id;
        _user.first_name = first_name;
        _user.isLoggedIn = true;
      }

    }
  }]);
