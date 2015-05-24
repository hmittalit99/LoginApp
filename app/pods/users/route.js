import Ember from "ember";
export default Ember.Route.extend({
	// beforeModel: function(username){

	// 	var self= this;
	//     this.store.find("token",username).then(function (token) {
	//         if (token){
	//           var extractedToken= token.get('tokenId');
	//           if(!extractedToken){
	//             self.transitionToRoute('admin-page');
	//           }
	//         }
	//      },function(token){
	//         self.transitionToRoute('admin-page');
	//      });
	// },

	model: function() {
		return this.store.find('user');		
	}
});