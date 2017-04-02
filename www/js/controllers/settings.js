'use strict';

app.controller('SettingCtrl', function(Auth, $ionicPopup) {
  var sett = this;

  sett.maxAge = 25;
  sett.men = true;
  sett.women = false;

  sett.changeMaxAge = function() {

  };

  sett.selectMen = function() {

  };

  sett.selectWomen = function() {

  };

  sett.logout = function() {
    $ionicPopup.confirm({
      title: 'Logout',
      template: 'Do you want to logout?'
    })
    .then(function(res) {
      if (res) {
        Auth.logout();
      }
    });
    
  };

});