// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(array, n) {
    let result = []   // create an empty array store our result
    for (let i = 0; i < n; i++) {
        if (i < n && i < array.length) {
            result.push(array[i])
        }
    }
    return result
}
console.log(take([10, 20, 3, 34, 51, 6, 8], 5)) // [ 1, 2, 3, 4, 5 ]

// alternate solution

function take(array, number) {

    // the slice method takes two parameter(start, end)
    return array.slice(0, number)
}
console.log(take([10, 20, 3, 34, 51, 6, 8], 5)) 
