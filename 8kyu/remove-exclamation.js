/* Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi" */



function remove(str){
    return str.replace(/!+$/, '') // regular expression
}
console.log(remove("Hi! Hi!"))