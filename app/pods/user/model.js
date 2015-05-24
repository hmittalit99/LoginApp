import DS from "ember-data";


var user = DS.Model.extend({
  firstname   : DS.attr('string'),
  lastname    : DS.attr('string'),
  username    : DS.attr('string'),
  password    : DS.attr('string'),
  role        : DS.attr('string')
});


// http://edgycircle.com/blog/2014-using-fixtures-in-combination-with-ember-cli/
user.reopenClass({
  FIXTURES: [{
  id: 'kbatra',
  firstname   : "Kovid",
  lastname    : "Batra",
  username    : "kbatra",
  password    : "abc",
  role        : "admin"
	}, 
	{
  id: "gbatra",
  firstname   : "Gaurav",
  lastname    : "Batra",
  username    : "gbatra",
  password    : "abc",
  role        : "user"
	}]
});

export default user;