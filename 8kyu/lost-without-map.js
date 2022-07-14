// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]


// my solution
function doubleInteger(integer){
    let newArray = []
    for (let i = 0; i < integer.length; i++) {      // loop through the array 
        newArray.push(integer[i] * 2);              // push every double integer inside the new array
    }
    return newArray                                // return new array
}
console.log(doubleInteger([4,5,6]))