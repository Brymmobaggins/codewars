// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// solution

function problem(x){

    if (typeof x === "string"){          // if statement to check if the data type is a string
        return "Error"                  // if true return error
    }else{
        return x * 50 + 6       
    }
    
}
console.log(problem("hello"))             // Error