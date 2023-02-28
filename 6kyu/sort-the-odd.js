// You will be given an array of numbers.You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions

// Examples

// [7, 1]  => [1, 7]
// [5, 8, 6, 3, 4]  => [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  => [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortOdd(array) {
    let oddsArray = []   // create an empty array to store odds numbers

    // loops through the array, if it odd push to the odd array
    for (let i = 0; i < array.length; ++i) {
        if (array[i] % 2 !== 0) {
            oddsArray.push(array[i])
        }
    }
    // sort odd numbers in the odd array from smallest to largest
    oddsArray.sort(function (a, b) {
        return a - b
    })
    // loop through array, replace any odd values with sorted odd values
    for (let j = 0; j < array.length; ++j) {
        if (array[j] % 2 !== 0) {
            array[j] = oddsArray.shift()
        }
    }
    return array
}
console.log(sortOdd([5, 8, 6, 3, 4])) // [ 3, 8, 6, 5, 4 ]
console.log(sortOdd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])) // [1, 8, 3, 6, 5,4, 7, 2, 9, 0 ]