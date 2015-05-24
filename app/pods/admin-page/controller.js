// import Ember from 'ember';

// export default Ember.Controller.extend({
// });

import Ember from 'ember';

export default Ember.Controller.extend({

	 loginFailed: false,

	generateToken: function () {
    return Math.floor(Math.random() * (100000- 1 + 1)) + 1;
     },

	verifyPassword: function (username, password) {
     var self= this;
    this.store.find("user",username).then(function (user) {
        if (user){
          var extractedPassword= user.get('password');
          if(extractedPassword===password){
          //
          // set success true
            // self.set('success',true);
            var tokenId = self.generateToken();
            self.store.push('token', {
            id:username,
            username: username,
            tokenId: tokenId
            });
            self.transitionToRoute('users');
          // this.sendAction('verified', this.get('username'));
          }
          else{
            self.set('loginFailed',true);
          }
        }
     },function(){
     	self.set('loginFailed',true);
        self.transitionToRoute('admin-page');
     });
  },

	actions: {
	    login: function(username, password) {
	      console.log('login controller');
	      console.log(username);
	      console.log(password);
	      this.verifyPassword(username,password);
	     
	    }
    }
});