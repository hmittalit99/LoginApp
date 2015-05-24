import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("login", {
    path: "/"
  });

  this.route("welcome-page", {
    path: "/welcomepage"
  });

  this.resource("users", function() {
    this.resource("user", {
      path: ":user_id"
    });
  });

  this.route("creation-page");
  this.route("sign-up");
});

export default Router;