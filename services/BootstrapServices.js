'use strict'

angular
  .module('frontend.BootstrapServices', ['ui.bootstrap'])
  .factory('BootstrapServices',[function(){
    return{

      /**
       *
       *
       *
       **/
      tooltipMessage: function()
      {
        return "On the right";
      },

    }
  }]);
