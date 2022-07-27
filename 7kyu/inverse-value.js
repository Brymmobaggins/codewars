// Given a set of numbers, return the additive inverse of each.Each positive becomes negatives, and the negatives become positives.

//  invert([1, 2, 3, 4, 5]) == [-1, -2, -3, -4, -5]
// invert([1, -2, 3, -4, 5]) == [-1, 2, -3, 4, -5]
// invert([]) == []
// You can assume that all values are integers.Do not mutate the input array / list.

// my solution
function invert(array) {
    let newArray = []                           // create a new empty array
    for (let i = 0; i < array.length; i++) {   // loop through the array given array
        newArray.push(array[i] * -1);  // push element inside `newarray` every iteration and multiply by `-1`
    }
    return newArray
}
console.log(invert([0, 1, -2]))             // [-0, -1, 2]