// Return the provided string with the first letter of each word capitalized.Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.



function titleCase(str){
    let newString = str.split(" ")                // split every word inside
    let newArray = []                             // create new array
    for(let i = 0 ; i < newString.length; i++){   // loop through the array 
        // convert the first letter inside first word to uppercase and other lower case
         newArray[i]= newString[i][0].toUpperCase() + newString[i].slice(1).toLowerCase() 
    }
    return newArray.join(" ")                      // join the word 
}
  
console.log(titleCase("I'm a little tea pot"))      //  I'm A Little Tea Pot  