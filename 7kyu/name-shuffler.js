// Write a function that returns a string in which firstname is swapped with last name.

//     Example(Input-- > Output)

// "john McClane" -- > "McClane john"

function shuffName(str){

    return str.split(" ").reverse().join(' ')   // split the word, reverse the word and join with a space
}
console.log(shuffName("Tobi Amusan"))           // Amusan Tobi     

// second solution 
function reverseName(str){
    let name = str.split(" ")
    return name[1] + " " + name[0]
}
console.log(reverseName("Ibrahim Bakare"))          // Bakare ibrahim