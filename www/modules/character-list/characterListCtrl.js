/**
 * Created by FranzR on 2/21/2015.
 */

angular.module('characters.list.controller',[])

.controller('CharacterListCtrl',
    function(
        $scope
        ,Characters
    ){
        $scope.grid = {};

        var x = Characters.get(
            {
                'character':'を'
            }
        );
        //console.log(x);

        var z = Characters.get({
            leadingConsonant:'k'
        });

        var z = Characters.all();

        var grid = [];

        //Get all possible property value

        var properties = [];
        angular.forEach(z,function(value,key){
           if(properties.indexOf(value.leadingConsonant)===-1){
                    properties.push(value.leadingConsonant);
           }
        });

        var grid2=[];
        angular.forEach(properties,function(value,key){
           var chars = Characters.get({'leadingConsonant':value});
            angular.forEach(chars,function(value2,key2){

                var tile = {
                    colspan:"",
                    rowspwan:"",
                    class:""
                };

                if(key2 === 0){



                    tile.colspan="2";
                    tile.rowspwan="2";
                    tile.class="home-character-featured"
                } else {
                    tile.colspan="1";
                    tile.rowspwan="1";
                    tile.class="home-character"
                }
                tile.char = value2;

                grid2.push(tile);
            })
        });

        //console.log(grid2);

        console.log(properties);

        angular.forEach(z ,function(value,key){

            var tile = {

                colspan:"",
                rowspwan:"",
                class:""

            };



            if(key%6 === 0){
                tile.colspan="2";
                tile.rowspwan="2";
                tile.class="home-character-featured"
            } else {
                tile.colspan="1";
                tile.rowspwan="1";
                tile.class="home-character"
            }
            tile.char = value;

            grid.push(tile);
        });

        console.log(grid);

        $scope.grid = grid;





        //$scope.gridChars = z;



        //console.log(gridChars);

        //var z = Characters.getByLeadingConsonant('t');
        //console.log(z);

    $scope.doThis = function(){
        alert('aaa');
    }

        $scope.aaa = function(){
            console.log('aaa');
        }

    });
