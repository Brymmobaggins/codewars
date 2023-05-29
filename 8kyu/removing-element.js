/*t ake an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!*/

// Solution 1

function removeEveryOther(arr) {

    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]))

// solution 2 

function removeEveryOther(arr) {
    let newArr = []          // create an emply array
    for (let i = 0; i < arr.length; i += 2){  // loop through the array by 2 
        newArr.push(arr[i])     // display the elment    
    }
    return newArr     // return the new array
}
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]))


