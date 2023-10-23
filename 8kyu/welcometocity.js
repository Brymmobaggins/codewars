/*Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

['John', 'Smith'], 'Phoenix', 'Arizona'
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!*/

function sayHello(name, city, state) {

    // join the array, converting it to a string with spaces between each element.
    name = name.join(" ")

    //  the template literals insert the name, ctity and state variables into the greeting string.
    return `Hello, ${name}! welcome to ${city}, ${state}!`
}
console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))