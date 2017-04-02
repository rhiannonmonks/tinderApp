'use strict';

app.controller('HomeCtrl', function(Auth) {

  var home = this;
  home.profiles = Auth.getProfiles();
});