// Task
// Create a method to see whether the string is ALL CAPS.

//     Examples(input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True


String.prototype.isUpperCase = function () {
    if (this.toUpperCase() == this.toString()) {
        return true;
    } else {
        return false
    }

}
console.log(isUpperCase("hello World"))  // false
console.log(isUpperCase("HELLO WORLD"))  // true
