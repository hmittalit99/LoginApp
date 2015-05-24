import Ember from 'ember';

export default Ember.Component.extend({
	username: '',
	firstname: '',
	lastname: '',
	password: '',
	confirmpassword: '',
	confPassMatch:false,

	actions: {
		submit: function () {
			var username = this.get('username');
			var firstname = this.get('firstname');
			var lastname = this.get('lastname');
			var password = this.get('password');
			var confirmpassword = this.get('confirmpassword');
			console.log('submit controller');
			

			if(firstname != null && username != null && lastname != null && password !=null && confirmpassword !=null){
				if(password === confirmpassword){
					this.sendAction('submitsend',username,firstname,lastname,password,confirmpassword);
					console.log('validation');
				}
				else{
					this.set('confPassMatch',true);
				}
				
			}	
			
		}
	}
});
