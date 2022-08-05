// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    let total = 0                     // create variable that holds the total
    for (let i = 0; i < array.length; i++) { // loop through the array
        total += array[i]           // assign the sum of element of array to total
    }
    if(array.length == 0){         // if statement to check If array is empty
        return 0
    }

    return total / array.length  // calcute the average of the array and return

}
console.log(findAverage([]))  // 0
console.log(findAverage([2, 4, 6])) // 6