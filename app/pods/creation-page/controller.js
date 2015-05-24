import Ember from 'ember';

export default Ember.Controller.extend({

	needs: "current-user",
	currentUser: Ember.computed.alias('controllers.current-user.username'),
	firstname: Ember.computed.alias('controllers.current-user.firstname')
}); 
