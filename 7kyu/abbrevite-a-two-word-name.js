// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// my solution
function abrrevName(name){
    let nameArray = name.split(" ")                          // split the array 
    let firstName = nameArray[0]                              // grab the first string
    let lastName = nameArray[1]                              // grab the second string   
    let initials = firstName[0] + "." + lastName[0]            // concat the first name, lastname and "."
    return initials.toUpperCase()                            // convert to uppercase
   
}
console.log(abrrevName("Ibrahim Bakare"))

// my second solution 
function abbrevName(name){
    let words = name.split(" ")                                   // split the element in the array
    return (words[0][0] + "." + words[1][0]).toUpperCase()
}
console.log(abbrevName('Kyle Simpson'))