/* For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)
Note: Make sure you return the correct message with correct spaces and punctuation.
Please leave feedback for this kata. Cheers! */

function whoEatThelastCookie(x) {
    if (typeof x === "string") {
        return "Who ate the last cookie? it was Zach!"
    } else if (typeof x === "number" || typeof x === "float") {
        return "Who ate the last cookie? it was Monica!"
    } else {
        return "Who ate the last cookie? it was the dog!"
    }
}
console.log(whoEatThelastCookie("90"))

// Solution 2

function whoEatThelastCookie(x) {
    let name = typeof x
    let who = name === "string" ? "Zach" : name === "number" || name === "float" ? "Monica" : "the dog"

    return `who ate the last cookie?  It was ${who}`

}
console.log(whoEatThelastCookie("lorem"))