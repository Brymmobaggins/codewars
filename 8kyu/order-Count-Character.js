/* DESCRIPTION:
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]] */

var orderedCount = function (text) {
    var arr = [];
    for (var i = 0; i < text.length; ++i) {
        var count = 0;
        for (var j = 0; j < arr.length; ++j)
            if (arr[j][0] == text[i])
                count++;
        if (count == 0) {
            for (var j = i; j < text.length; ++j)
                if (text[j] == text[i])
                    count++;
            arr.push([text[i], count]);
        }
    }
    return arr;

}
console.log(orderedCount('abracadabra'))