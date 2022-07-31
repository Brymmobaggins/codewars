// Return the provided string with the first letter of each word capitalized.Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.



function titleCase(str){
    let newString = str.split(" ")                // split every word with string
    let newArray = []                             // create an empty new array
    for(let i = 0 ; i < newString.length; i++){   // loop through the array 
        // convert the first letter inside each word to uppercase and other to lower case
         newArray[i]= newString[i][0].toUpperCase() + newString[i].slice(1).toLowerCase() 
    }
    return newArray.join(" ")                      // join new word  and return it
}
  
console.log(titleCase("I'm a little tea pot"))      //  I'm A Little Tea Pot  