/* 
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.*/

function cubeOdd(arr) {
    let oddSum = 0         // create a variable to hold the sum
    for (let i = 0; i < arr.length; i++) { // loop through the arr
        if (isNaN(arr[i])) {        //  if any of the values arent number return undefined
            return undefined
        }
        let cubed = Math.pow(arr[i], 3)  // cubed the value inside the arr
        if (cubed % 2 != 0) {            // if cubed value is odd
            oddSum += cubed              // sum all odd values
        }
    }
    return oddSum
}
console.log(cubeOdd([-3, -2, 2, 3])) // 0
console.log(cubeOdd([1, 2, 3, 4])) // 28
console.log(cubeOdd([1, "b", 3, 4])) // undefined

