/*Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)*/

function getNumberfromStr(str) {

    return parseInt(str.replace(/\D/g, ''))

}
console.log(getNumberfromStr("hell12"))

