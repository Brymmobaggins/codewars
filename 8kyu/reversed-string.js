// Complete the solution so that it reverses the string passed into it.

// 'world'  => 'dlrow'
// 'word'   => 'drow'

function reversedString(string){
        // split input into array of strings, reverse the strings and join the strings

    return string.split("").reverse("").join("")  

}
console.log(reversedString("helloword"))