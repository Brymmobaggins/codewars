
// Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1)

// first solution
function findNeedle(haystack) {
    
    for (let i = 0; i < haystack.length; i++) {             // loop through array `hayStack`
        if (haystack[i] === "needle") {  // if statement to chechk if current elemnt is `needle`  
            return "found in needle at position " + i // return `found in needle at position` and the current element position/index
        }
    }
    
}
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])) // found needle at postion 5


// second solution
function findNeedle(haystack){
    return "found needle at postion " + haystack.indexOf("needle")
}
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])) // found needle at postion 5