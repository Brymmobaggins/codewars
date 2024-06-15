/*DESCRIPTION:
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
"312" should return "333122"
"102269" should return "12222666666999999999" */

function explode(string) {
    let res = ""

    for (let char of string) {
        res += char.repeat(char)
    }
    return res

}
console.log(explode("312"))