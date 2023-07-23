/*You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.*/

// solution 1
function calculator(a, b, sign) {
    if (typeof (a) !== 'number' || typeof (b) !== 'number' || (sign !== '+' && sign !== '-' && sign !== '*' && sign !== '/')) {
        return 'unknown value';
    }
    switch (sign) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'unknown value';
    }
}
console.log(calculator(10, 8, "-")) // 2

// solution 2

function calculator(a, b, sign) {
    switch (sign) {
        case "+":
            return a + b
        case "-":
            return a - b
        case "/":
            return a / b;
        default:
            return "unknown  value"
    }
}
console.log(calculator(10, 8, "+")) // 18