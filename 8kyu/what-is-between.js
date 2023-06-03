/* Complete the function that takes two integers(a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4] */

function between(a, b) {
    let arr = [];      // create new array
  
    for (let i = a; i <= b; i++) {  //  loop start from a and loop througb b 
        arr.push(i);               // push the value inside new arr
    }
    return arr                     // return newArr
}
console.log(between(1, 4))