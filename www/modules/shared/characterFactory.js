angular.module('character.factory', [])

    .factory('Characters', function ($filter) {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var characters = [
            {
                set:'hiragana',
                character: 'Vowels',
                phonetic: 'vowels',
                leadingConsonant: '',
                vowel: 'a',
                title:true

            },
            {
                set:'hiragana',
                character: 'あ',
                phonetic: 'a',
                leadingConsonant: '',
                vowel: 'a'

            },
            {
                set:'hiragana',
                character: 'い',
                phonetic: 'i',
                leadingConsonant: '',
                vowel: 'i'
            },
            {
                set:'hiragana',
                character: 'う',
                phonetic: 'u',
                leadingConsonant: '',
                vowel: 'u'
            },
            {
                set:'hiragana',
                character: 'え',
                phonetic: 'e',
                leadingConsonant: '',
                vowel: 'e'
            },
            {
                set:'hiragana',
                character: 'お',
                phonetic: 'o',
                leadingConsonant: '',
                vowel: 'o'
            },
            {
                set:'hiragana',
                character: 'K',
                title:true

            },
            {
                set:'hiragana',
                character: 'か',
                phonetic: 'ka',
                leadingConsonant: 'k',
                vowel: 'a'
            },
            {
                set:'hiragana',
                character: 'き',
                phonetic: 'ki',
                leadingConsonant: 'k',
                vowel: 'i'
            },
            {
                set:'hiragana',
                character: 'く',
                phonetic: 'ku',
                leadingConsonant: 'k',
                vowel: 'u'
            },
            {
                set:'hiragana',
                character: 'け',
                phonetic: 'ke',
                leadingConsonant: 'k',
                vowel: 'e'
            },
            {
                set:'hiragana',
                character: 'こ',
                phonetic: 'ko',
                leadingConsonant: 'k',
                vowel: 'o'
            },
            {
                set:'hiragana',
                character: 'さ',
                leadingConsonant: 's',
                vowel: 'a',
                phonetic: 'sa'
            },
            {
                set:'hiragana',
                character: 'し',
                leadingConsonant: 's',
                vowel: 'i',
                phonetic: 'si'
            },
            {
                set:'hiragana',
                character: 'す',
                leadingConsonant: 's',
                vowel: 'u',
                phonetic: 'su'
            },
            {
                set:'hiragana',
                character: 'せ',
                leadingConsonant: 's',
                vowel: 'e',
                phonetic: 'se'
            },
            {
                set:'hiragana',
                character: 'そ',
                leadingConsonant: 's',
                vowel: 'o',
                phonetic: 'so'
            },
            {
                set:'hiragana',
                character: 'た',
                leadingConsonant: 't',
                phonetic: 'ta',
                vowel: 'a'
            },
            {
                set:'hiragana',
                character: 'ち',
                leadingConsonant: 't',
                phonetic: 'ti',
                vowel: 'i'
            },
            {
                set:'hiragana',
                character: 'つ',
                leadingConsonant: 't',
                phonetic: 'tu',
                vowel: 'u'
            },
            {
                set:'hiragana',
                character: 'て',
                leadingConsonant: 't',
                phonetic: 'te',
                vowel: 'e'
            },
            {
                set:'hiragana',
                character: 'と',
                leadingConsonant: 't',
                phonetic: 'to',
                vowel: 'o'
            },
            {
                set:'hiragana',
                character: 'な',
                leadingConsonant: 'n',
                phonetic: 'na',
                vowel: 'a'
            },
            {
                set:'hiragana',
                character: 'に',
                leadingConsonant: 'n',
                phonetic: 'ni',
                vowel: 'i'
            },
            {
                set:'hiragana',
                character: 'ぬ',
                leadingConsonant: 'n',
                phonetic: 'nu',
                vowel: 'u'
            },
            {
                set:'hiragana',
                character: 'ね',
                leadingConsonant: 'n',
                phonetic: 'ne',
                vowel: 'e'
            },
            {
                set:'hiragana',
                character: 'の',
                leadingConsonant: 'n',
                phonetic: 'no',
                vowel: 'o'
            },
            {
                set:'hiragana',
                character: 'は',
                leadingConsonant: 'h',
                phonetic: 'ha',
                vowel: 'a'
            },
            {
                set:'hiragana',
                character: 'ひ',
                leadingConsonant: 'h',
                phonetic: 'hi',
                vowel: 'i'
            },
            {
                set:'hiragana',
                character: 'ふ',
                leadingConsonant: 'h',
                phonetic: 'hu',
                vowel: 'u'
            },
            {
                set:'hiragana',
                character: 'へ',
                leadingConsonant: 'h',
                phonetic: 'he',
                vowel: 'e'
            },
            {
                set:'hiragana',
                character: 'ほ',
                leadingConsonant: 'h',
                phonetic: 'ho',
                vowel: 'o'
            },
            {
                set:'hiragana',
                character: 'ま',
                leadingConsonant: 'm',
                phonetic: 'ma',
                vowel: 'a'
            },
            {
                set:'hiragana',
                character: 'み',
                leadingConsonant: 'm',
                phonetic: 'mi',
                vowel: 'i'
            },
            {
                set:'hiragana',
                character: 'む',
                leadingConsonant: 'm',
                phonetic: 'mu',
                vowel: 'u'
            },
            {
                set:'hiragana',
                character: 'め',
                leadingConsonant: 'm',
                phonetic: 'me',
                vowel: 'e'
            },
            {
                set:'hiragana',
                character: 'も',
                leadingConsonant: 'm',
                phonetic: 'mo',
                vowel: 'o'
            },
            {
                set:'hiragana',
                character: 'や',
                leadingConsonant: 'y',
                phonetic: 'ya',
                vowel: 'a'
            },
            {
                set:'hiragana',
                character: 'ゆ',
                leadingConsonant: 'y',
                phonetic: 'yu',
                vowel: 'u'
            },
            {
                set:'hiragana',
                character: 'よ',
                leadingConsonant: 'y',
                phonetic: 'yo',
                vowel: 'o'
            },
            {

                leadingConsonant: 'y',

            },
            {

                leadingConsonant: 'y',

            },
            {
                set:'hiragana',
                character: 'ら',
                leadingConsonant: 'r',
                phonetic: 'ra',
                vowel: 'a'
            },
            {
                set:'hiragana',
                character: 'り',
                leadingConsonant: 'r',
                phonetic: 'ri',
                vowel: 'i'
            },
            {
                set:'hiragana',
                character: 'る',
                leadingConsonant: 'r',
                phonetic: 'ru',
                vowel: 'u'
            },
            {
                set:'hiragana',
                character: 'れ',
                leadingConsonant: 'r',
                phonetic: 're',
                vowel: 'e'
            },
            {
                set:'hiragana',
                character: 'ろ',
                leadingConsonant: 'r',
                phonetic: 'ro',
                vowel: 'o'
            },
            {
                set:'hiragana',
                character: 'わ',
                leadingConsonant: 'w',
                phonetic: 'wa',
                vowel: 'a'
            },
            {
                set:'hiragana',
                character: 'ゐ',
                leadingConsonant: 'w',
                phonetic: 'wi',
                vowel: 'i'
            },
            {
                set:'hiragana',
                character: 'ゑ',
                leadingConsonant: 'w',
                phonetic: 'we',
                vowel: 'e'
            },
            {
                set:'hiragana',
                character: 'を',
                leadingConsonant: 'w',
                phonetic: 'wo',
                vowel: 'o'
            },
            {

                leadingConsonant: 'w',

            },
            {
                set:'hiragana',
                character:'ん',
                leadingConsonant:'~n',
                phonetic: 'n',
                vowel: ''
            }

        ];



        return {
            all: function () {
                return characters;
            },
            get: function (characterObj) {
                var match = $filter('filter')(characters,characterObj);
                return match;
            },
            //getByLeadingConsonant: function(consonant){
            //    var match = $filter('filter')(characters,{'leadingConsonant':consonant});
            //    return match;
            //},
            //getByVowel: function(vowel){
            //    var match = $filter('filter')(characters,{'vowel':consonant});
            //    return match;
            //}
        }
    })


