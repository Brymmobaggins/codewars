// Simple, remove the spaces from the string, then return the resultant string.


function removeSpace(string){
    return string.replace(/\s+/g, '')
}
console.log(removeSpace("   Hello world"))   // Helloworld