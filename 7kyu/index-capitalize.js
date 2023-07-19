/*Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.

Good luck!

Be sure to also try: */

function capitalize(str, arr) {
    let letters = str.split("")
    for (i = 0; i < letters.length; i++) {
        for (j = 0; j < arr.length; j++) {

            if (i === arr[j]) {
                letters[i] = letters[i].toUpperCase()
            }
        }
    }
    return letters.join("")
}


console.log(capitalize("abcdef", [1, 2, 5, 9]))