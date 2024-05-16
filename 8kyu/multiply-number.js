// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

function multiply(number) {

    let x = Math.pow(5, Math.abs(number).toString().length)
    return number * x
}
console.log(multiply(59))

function multiply(number) {
    return number * Math.pow(5, Math.abs(number).toString().length);
}
console.log(multiply(45))