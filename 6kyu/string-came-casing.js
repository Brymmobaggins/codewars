// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string){
    let result = ""            // create a variale that holds the result
    let letters  = string.split("") // split the string in letters
    for(let i = 0; i < letters.length; i++){ // loop through the letters
        if(string[i] === letters[i].toUpperCase()){ // if statement to check if each iteration is Uppercase
            result += " " + letters[i]  // if true, concatenate the letter with a space before it
        
        }else{
            result += letters[i]      // otherwise, concatenate the letters with no space
        }
    }
    return result                   // return result
 
}
console.log(solution("camelCasing"))