// Welcome.In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9 square is 81 and 1 square is 1.

// Note: The function accepts an integer and returns an integer


function squareDigit(number){
    let string = number.toString()               // conver number to string
    let result = []
    for (let i = 0; i < string.length; i++) {       // loop through the string
        result[i] = string[i] * string[i]          // multiple each element by itself equals the result
    }
    return Number(result.join(""))                // return the string and convert it to number

}
console.log(squareDigit(923))            // 8149
