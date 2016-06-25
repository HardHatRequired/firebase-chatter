(function() {
    angular
        .module('firebaseChat')
        .service('chatService', function() {

          this.sendNewMessage = function(message) {
            var updates = {};
            var newKey = firebase.database().ref().child('messages').push().key;

            updates['/messages/' + newKey] = message;
            return firebase.database().ref().update(updates);

          }

        }); // end service

})();
