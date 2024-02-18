/*Your task is to write function factorial.*/

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));

// solution 2

function factorial(n) {
    let sum = 1
    for (let i = 1; i <= n; i++) {
        sum *= i
    }
    return sum
}
console.log(factorial(5))