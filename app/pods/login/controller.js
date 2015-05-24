import Ember from 'ember';

export default Ember.Controller.extend({

  needs: 'current-user',
  loginFailed: false,

  generateToken: function () {
    return Math.floor(Math.random() * (100000- 1 + 1)) + 1;
  },

  verifyPassword: function (username, password) {
    var self= this;
    this.store.find("user",username).then(function (user) {
        if (user){
          var extractedPassword= user.get('password');
          var role = user.get('role');
          if(extractedPassword===password){
          //
          // To generate token
          //
            var tokenId = self.generateToken();
            self.store.push('token', {
            id:username,
            username: username,
            tokenId: tokenId
            });

            self.set('controllers.current-user.username', username);

            // For Admin and User Login

            if (role === "admin"){
              self.transitionToRoute('users');
            }
            else{
              self.transitionToRoute('welcome-page');
            }
            
          }
          else{
            self.set('loginFailed',true); // for password validation
          }
        }
     },function(){
        self.set('loginFailed',true);  // for username validation
        self.transitionToRoute('login');
    });
  },

	actions: {
    login: function(username, password) {
      console.log('login controller');
      this.verifyPassword(username,password);
    }
  }

   
});

