

/*Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.*/


function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

function numPrimorial(n) {
    let arr = []
    let i = 2
    while (arr.length < n) {
        if (isPrime(i)) {
            arr.push(i)
        }
        i++
    }
    return arr.reduce((a, b) => a * b)
}