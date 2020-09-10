$(function() {
    console.log('Start!');

    function LetterCountI(str) {

        var arrStr = [];
        var result = [];

        function duplicateCount(text) {
            let map = new Map();
            for (let i = 0; i < text.length; i++) {
                let char = text[i].toLowerCase();
                map.set(char, map.has(char) ? true : false);
            }
            return [...map].filter(e => e[1]).length;
        }

        function splitWord(str) {
            arrStr = str.split(' ');
        }

        function indexOfMax(arr) {
            if (arr.length === 0) {
                return -1;
            }

            var max = arr[0];
            var maxIndex = 0;

            for (var i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    maxIndex = i;
                    max = arr[i];
                }
            }

            return maxIndex;
        }


        function findStr(str) {
            splitWord(str);
            arrStr.forEach(function(item, i, arr) {
                result[i] = duplicateCount(item);
            });

            let indexMax = result.indexOf(Math.max(...result));
            return arrStr[indexMax];

        }


        str = findStr(str);

        console.log(str);



        return str;

    }

    LetterCountI("Today, is the greatest day ever!");




})