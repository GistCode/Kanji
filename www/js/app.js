// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('characters',
    ['ionic'
        , 'characters.learn.controller'
        , 'characters.list.controller'
        , 'ui.bootstrap'
        , 'ngMaterial'
        , 'ngAria'
        , 'character.factory'

    ])

    .run(function ($ionicPlatform) {

        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $ionicConfigProvider.views.transition("ios");
        $ionicConfigProvider.tabs.style("striped");
        $ionicConfigProvider.tabs.position("bottom");
        $ionicConfigProvider.navBar.alignTitle("center");
        $ionicConfigProvider.navBar.positionPrimaryButtons("left");
        $ionicConfigProvider.navBar.positionSecondaryButtons("right");
        $ionicConfigProvider.backButton.previousTitleText(true);
        $ionicConfigProvider.backButton.icon('ion-chevron-left');


        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "modules/tabs/templates/tabs.html"
            })

            // Each tab has its own nav history stack:

            .state('tab.characterList', {
                url: '/character-list',
                views: {
                    'character-list': {
                        templateUrl: 'modules/character-list/templates/character-list.html',
                        controller: 'CharacterListCtrl'
                    }
                }
            })

            .state('tab.character.learn', {
                url: '/character-list/:charId',
                views: {
                    'character-list': {
                        templateUrl: 'modules/character-learn/templates/character-learn.html',
                        controller: 'CharacterLearnCtrl'
                    }
                }
            })


        ;

        console.log($stateProvider);

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/character-list');

    });
