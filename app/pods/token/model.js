import DS from 'ember-data';

export default DS.Model.extend({
	
  username    : DS.attr('string'),
  tokenId    : DS.attr('string')
  
});
