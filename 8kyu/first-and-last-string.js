/* ou are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL */



function removeString(string){
    let newStr = string.split(",")  // split the string
    if(newStr.length < 3){        // if the length of the string is less 3 return NULL
        return null
    }
    return newStr.slice(1,-1).join(" ")  // else remove the first,last string and join without a comma


}
console.log(removeString("1,3")) // null
console.log(removeString("1,3,5,6")) // 3, 5