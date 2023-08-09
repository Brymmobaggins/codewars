/* Definition
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .
Return the result as String

Input >> Output Examples
disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 8*1 + 9*1 = 89 , thus output is "Disarium !!"

disariumNumber(564) ==> return "Not !!" 
Explanation:
Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"*/

//  solution 
function disariumNumber(num) {
    
    //convert input to string using `toString` method. This is done so we can access each digit in the number.
    num = num.toString()   

    /// A variable sum is initialized to 0 to store the running sum as we process each digit.
    let sum = 0   

    // A for loop iterates through each digit in the input number string. Inside the loop, the current digit is extracted and converted to a number using `parseInt()`.
    for (let i = 0; i < num.length; i++) {

        // The digit is raised to the power of its position (i+1) using Math.pow().
        let digit = Math.pow(num[i], i + 1)

        // This powered digit is added to the running sum variable.
        sum += digit
    }
    // After the loop, the final sum is compared to the original input number. If they are equal, it means the input is a disarium number. The function returns a string indicating if it is a disarium number or not.
    return (num == sum) ? "Disarium !!" : "Not !!"

}
// The console.log at the end calls the function on the example input 89 and prints the result.
console.log(disariumNumber(89)) // Disarium !!

