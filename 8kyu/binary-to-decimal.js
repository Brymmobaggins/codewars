// Complete the function which converts a binary number (given as a string) to a decimal number.


function bintoDecimal(bin) {

    // `parseInt` takes two parameter (string, radix) `radix parameter specifies the number system to use
    return parseInt(bin, 2)
}
console.log(bintoDecimal("10001"))  // 17
console.log(bintoDecimal("110")) // 6