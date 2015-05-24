import Ember from 'ember';

export default Ember.Component.extend({
	username: '',
	password: '',
	loginFailed: false,
	
 //   attributeBindings: ['loginfailed'],
	actions: {
		login: function () {
			var username = this.get('username');
			var password = this.get('password');
			console.log('component action');
			
			if(password != null && username != null){
				this.sendAction('loginsend', username,password);
			}	
		}
	}
});
