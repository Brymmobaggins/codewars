// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// first solution
function sumDigits(number){
    let sum = 0;
    for(let i = 0; i < number.length; i++){
        if (number[i].toString().split('')){
            sum += number[i]
        }
    }
    return sum
}
console.log(sumDigits(99))


// second solution
// function sumDigits(number) {
//     let digits = number.toString().split('')
//     let sum = 0
//     for (let i = 0; i < digits.length; i++) {
//         let digit = Number(digits[i])
//         if (digit) {
//             sum += digit
//         }
//     }
//     return sum
// }
// console.log(sumDigits(67))
