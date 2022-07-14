// Complete the solution so that it reverses the string passed into it.

// 'world'  => 'dlrow'
// 'word'   => 'drow'

function reversedString(string){
    return string.split("").reverse("").join("")  // split the string, reverse the string and join the string

}
console.log(reversedString("helloword"))