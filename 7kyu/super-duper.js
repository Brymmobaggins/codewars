// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// solution

function problem(x){

    if (typeof x === "string"){          // check if it is a string
        return "Error"
    }else{
        return x * 50 + 6
    }
    
}
console.log(problem("hello"))             // Error