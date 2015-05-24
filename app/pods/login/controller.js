import Ember from 'ember';

export default Ember.Controller.extend({

  needs: 'current-user',
  success : false,
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
          // set success true

            self.set('success',true);
            var tokenId = self.generateToken();
            self.store.push('token', {
            id:username,
            username: username,
            tokenId: tokenId
            });
            self.set('controllers.current-user.username', username);
            if (role === "admin"){
              self.transitionToRoute('users');
            }
            else{
              
            self.transitionToRoute('welcome-page');
            }
            
          }
          else{
            self.set('loginFailed',true);
          }
        }
     },function(){
        self.set('loginFailed',true);
        self.transitionToRoute('login');
     });
  },

  // performLogin: function(username){
  //   var tokenId = this.generateToken();
  //   this.store.push('token', {
  //   id:username,
  //   username: username,
  //   tokenId: tokenId
  //   });
  //   this.set('controllers.current-user.username', username);
  //   this.transitionToRoute('welcome-page');
  // },

   

	actions: {
    login: function(username, password) {
      console.log('login controller');
      //this.set('controllers.current-user.username', username);
      //this.set('controllers.current-user.password', password);
      this.verifyPassword(username,password);
    //  if (self.get('success')){
      //  this.performLogin();
   //   }
      // else{
      //   self.transitionToRoute('login');
      // }

    }
  }

   
});

