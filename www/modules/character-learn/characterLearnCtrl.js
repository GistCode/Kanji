/**
 * Created by FranzR on 2/21/2015.
 */

angular.module('characters.learn.controller', [])

    .controller('CharacterLearnCtrl', function ($scope) {

        $scope.clearDraw = function (char, obj) {
            var elem = angular.element(document.querySelector('#draw-' + char));
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
                            'stroke-linejoin': "miter"
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
                "container": {}

            }, {
                "kanji": "カ",
                "ruby": "ruby",
                "meaning": "ruby",
                "draw": "draw-" + "カ",
                "container": {}
            }
        ];



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
            $scope.clearDraw()
        }

    })