(function() {
    angular
        .module('firebaseChat')
        .controller('ChatCtrl', function($scope, chatService) {
          // $scope.index = "happy";

          $scope.addNewMessage = function(messageObj) {
            var message = messageObj;
            chatService.sendNewMessage(message).then(function(response) {
              console.log(response);
            });
          };

          var messageRef = firebase.database().ref('messages');

          messageRef.on('value', function(snapshot) {
            $scope.messages = snapshot.val();
            // $scope.$apply();
          });



        }); // end ctrl

})();
