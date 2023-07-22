/* convert number to reversed array of digits
 Given a random non - negative number, you have to return the digits of this number within an array in reverse order.

 Example(Input => Output):
 35231 => [1, 3, 2, 5, 3]
 0 => [0] */

// solution
function reverseDigits(num){
     
    // variable that hold the result
    let result = [] 
    
    // convert number to string of numbers, split and join them
    let newNum = num.toString().split(" ").join(" ")
     
    // loop through the string of numbers
    for(i = 0; i < newNum.length; i++){ 
        result.push(parseInt(newNum[i]))  
        
    // convert the string of numbers back to number push each iteration value into empty array
    }
    return result.reverse()         // reverse the array of diigits
}
console.log(reverseDigits(35231))

