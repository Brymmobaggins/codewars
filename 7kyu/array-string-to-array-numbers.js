/* Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well */

// first solution
function toNumberArray(stringArray) {

    return stringArray.map((i) => Number(i))
}
console.log(toNumberArray(["1", "2", "3"])) // [1, 2, 3]

// second solution
function toNumberArray(stringArray) {
    let newArr = []

    for (let i = 0; i < stringArray.length; i++) {
        if (!isNaN(stringArray[i])) {
            // console.log("is a number")
            newArr.push(+stringArray[i])
        } else {
            continue
        }

    }
    return newArr
}
console.log(toNumberArray(["1", "2", "3"])) // [1, 2, 3]

// third solution 

function toNumberArray(stringArray) {
    let newArr = []     // creates an empty array called to array to store the converted values
    for (let i = 0; i < stringArray.length; i++) {  // it loopd through each element in the input stringarray
        newArr.push(Number(stringArray[i])) // inside the loop it converts the current element to number using Number() function and pushes it to newArr

    }
    return newArr  // after looping through all the element, it returns the newArr containing the converted numbers
}
console.log(toNumberArray(["1", "2", "3"])) // [1,2,3]

