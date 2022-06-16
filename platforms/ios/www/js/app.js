// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider,$urlRouterProvider){

  
  $stateProvider.state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  $stateProvider.state('tab.avis', {
      url: '/avis',
      views: {
        'tab-avis': {
          templateUrl: 'templates/tab-avis.html',
          controller: 'AvisCtrl'
        }
      }
    })

$stateProvider.state('samba', {
      url: 'tab/avis/samba',
      templateUrl:'templates/samba.html',
          controller: 'SambaCtrl'
  })

  $stateProvider.state('tab.notifications', {
      url: '/notifications',
      views: {
        'tab-notifications': {
          templateUrl: 'templates/tab-notifications.html',
          controller: 'NotifCtrl'
        }
      }
  })

  $stateProvider.state('tab.profil', {
      url: '/profil',
      views: {
        'tab-profil':{
          templateUrl: 'templates/tab-profil.html',
          controller: 'ProfilCtrl'
        }
      }
  })

  $stateProvider.state('tab.reglages', {
      url: '/reglages',
      views: {
        'tab-reglages':{
          templateUrl:'templates/tab-reglages.html',
          controller: 'ReglagesCtrl'
        }
      }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/avis')

});
