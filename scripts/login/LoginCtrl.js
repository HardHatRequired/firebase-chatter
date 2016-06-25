(function() {
    angular
        .module('firebaseChat')
        .controller('LoginCtrl', function($scope) {

          var storage = firebase.storage();
          var storageRef = storage.ref();
          // console.log("storageRef: ", storageRef);
          this.sendNewMessage = function(message) {
            
          }
        }); // end ctrl

})();
