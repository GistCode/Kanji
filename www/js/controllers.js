angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope,ngAudio) {


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
        $scope.tabs.activeTab = 2;




        $scope.clearDraw = function (char, obj) {
            console.log('aaa');
            //obj.dmak.erase();
            //obj.dmak = null;
            var elem = angular.element(document.querySelector('#draw-'+char));
            console.log(elem.children());
            elem.children().remove();

        };

        $scope.startDraw = function (char, obj) {
            console.log(char, obj);

            obj.dmak = new Dmak(char,

                {
                    uri: "css/svg/",
                    'autoplay': true,
                    'height': 300,
                    'width': 300,
                    'grid': {
                        'show': false
                    },
                    'stroke': {
                        'attr': {
                            'stroke-linecap': "square",
                            'stroke-linejoin':"miter"
                        },
                        'order': {
                            'visible': true,
                            'attr': {
                                'font-size': 14,

                            }
                        }
                    },
                    'element': "draw-" + char

                }
            );

            console.log(obj.dmak);


        };

        $scope.kanjis = [
            {
                "kanji": "タ",
                "ruby": "ruby",
                "meaning": "ruby",
                "draw": "draw-" + "タ",
                "container":{}

            }, {
                "kanji": "カ",
                "ruby": "ruby",
                "meaning": "ruby",
                "draw": "draw-" + "カ",
                "container":{}
            }
        ]
        ;

//$scope.dmak = $scope.startDraw();


        $scope.eraseLastStrokes = function (dmak) {
            dmak.pause();
            dmak.eraseLastStrokes(1);
        }

        $scope.pause = function (dmak) {
            dmak.pause();
        }

        $scope.render = function (dmak) {

            dmak.render();
        }

        $scope.renderNextStrokes = function (dmak) {
            dmak.pause();
            dmak.renderNextStrokes(1);
        }

        $scope.erase = function (dmak) {
            dmak.pause();
            dmak.step = 4;
            dmak.erase();
        }


        $scope.tabs = [
            {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
            {title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true}
        ];
    })

    .
    controller('ChatsCtrl', function ($scope, Chats) {
        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        }
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('FriendsCtrl', function ($scope, Friends) {
        $scope.friends = Friends.all();
    })

    .controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
