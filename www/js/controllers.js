angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {


        $scope.tabs = [
            {
                "title": "Home",
                "content": "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica."
            },
            {
                "title": "Profile",
                "content": "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee."
            },
            {
                "title": "About",
                "content": "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade."
            },
            {
                "title": "Contact",
                "content": "Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid."
            }
        ];
        $scope.tabs.activeTab = 3;

        var dmak = new Dmak('タ',

            {
                uri: "css/svg/",
                'autoplay': true,
                'height':309,
                'width':309,
                'grid': {
                    'show': false
                },
                'stroke': {
                    'order': {
                        'visible': true,
                        'attr':{
                            'font-size':14
                        }
                    },
                    'attr': {
                        'stroke': "random"
                    }
                },
                'element': "draw"

            }
        );

        $scope.dmak = dmak;

        $scope.clear = function(dmak){

            console.log(dmak);
             //= false;

            dmak.erase();

            //dmak.erase();
        }

        $scope.tabs = [
            { title:'Dynamic Title 1', content:'Dynamic content 1' },
            { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
        ];
    })

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
