// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form.For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
    num = String(num)                // convert number to string
    let result = []                 // variable to hold the result
    for (let i = 0; i < num.length; i++) { // loop through the number
        if (num[i] == 0) {          // if statement to check if each iteration is equals 0
            continue
        } else {
            result.push(num[i] + "0".repeat(num.length - i - 1))
        }
    }
    return result.join(" + ")      // return join the addition sign `+` with result 
}
console.log(expandedForm(78))       // 70 + 8