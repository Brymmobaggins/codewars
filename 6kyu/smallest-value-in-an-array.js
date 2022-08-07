// Write a function that can return the smallest value of an array or the index of that value.The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates.Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

//  min([1, 2, 3, 4, 5], 'value') // => 1
// min([1, 2, 3, 4, 5], 'index') // => 0


function min(arr, toReturn) {
    for (let i = 0; i < arr.length; i++) {  // loop through the array
        if (toReturn === 'value') {   // if statement to check if `toreturn is 'value
            return Math.min(...arr)  // if true, return return the min value inside the array
        } else {
            return arr.indexOf(Math.min(...arr)) // otherwise return the index of minium value
        }
    }
}
console.log(min([100, 20, 3, 4, 5], 'value'))  // 3
console.log(min([100, 20, 3, 4, 5], 'index'))  // 2
