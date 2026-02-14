

/*Given a string, return a new string that consists of the given string with a reversed copy of itself appended to the end of it.*/

function stringMirror(str){
    let reverseStr = str.split("").reverse().join("")
    return str + reverseStr
}
console.log(stringMirror("Helloworld"))