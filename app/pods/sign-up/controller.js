import Ember from 'ember';

export default Ember.Controller.extend({

  needs: 'current-user',

	actions: {

    signup: function(username, firstname, lastname, password, confirmpassword) {
      console.log("submit controller");
      
       // create a record and save it to the store
      if(password===confirmpassword){
         this.store.push('user', {
           id:username,
           username: username,
           firstname: firstname,
           lastname: lastname,
           password: password,
           confirmpassword:confirmpassword
         });

         this.set('controllers.current-user.username', username);
         this.set('controllers.current-user.firstname', firstname);
         this.transitionToRoute('creation-page');
      }
      else{
        this.transitionToRoute('sign-up');
      }
    }
   }
});
