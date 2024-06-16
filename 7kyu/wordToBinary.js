/* Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.

Example: 'man' should return [ '01101101', '01100001', '01101110' ] */

function wordToBinary(str) {
    let res = []
    let charBin;
    // str = str.split("")
    for (let char of str) {
        charBin = char.charCodeAt().toString(2)
        if (charBin.length < 8) {
            res.push(0 + charBin)
        } else {
            res.push(charBin)
        }
    }
    return res
}

console.log(wordToBinary("AB"))

function wordToBin(str) {
    var arr = [];
    for (var i = 0; i < str.length; ++i)
        arr.push(0 + str[i].charCodeAt().toString(2))
    return arr;
}