// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

//     Example
// For input[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countOfPostiveSumOfNegative(input) {
    let newArray = []
    let posCount = 0
    let negSum = 0
    
    // validate input
    if (input === null || input.length === 0) {
        return newArray
    }
    for (let i = 0; i < input.length; i++) {               // loop through array of numbers
        if (input[i] == 0) {
            continue
        } else if (input[i] >= 0) {
            posCount++                                   // count of positive integers
        } else if (input[i] < 0) {
            negSum += input[i]                           // sum of negative numbers
        }
    }
    // output
    newArray.push(posCount)
    newArray.push(negSum)

    return newArray
}
console.log(countOfPostiveSumOfNegative([3, 5, 6, 8, -8, -6]))   // 4, -4