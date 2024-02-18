/* 
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.*/

function cubeOdd(arr) {
    let oddSum = 0
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            return undefined
        }
        let cubed = Math.pow(arr[i], 3)
        if (cubed % 2 != 0) {
            oddSum += cubed
        }
    }
    return oddSum
}
console.log(cubeOdd([-3, -2, 2, 3]))
console.log(cubeOdd([1, 2, 3, 4]))

