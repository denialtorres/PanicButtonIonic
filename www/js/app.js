// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  console.log("estas en starter")
})

app.controller('saveTheWorldController', function($scope, $http){

 $scope.saveTheWorld = function(){
   console.log('press button')
   $scope.buttonMessage = "World is saved"

   var url = 'https://api.uber.com/v1/products?latitude=37.7759792&longitude=-122.41823';
   var xhr = new XMLHttpRequest();
   xhr.open('GET', url);
   xhr.setRequestHeader("Authorization", "Token ikGvlAJSejPSY6bUp7APhxkwyu5ermguZnreUaCd");
   xhr.send();
   window.location="https://login.uber.com/oauth/v2/authorize?response_type=code&client_id=_g8Fw1o5KsrVRNBNskv2cMEMhoE6RPbW";

 };

});
