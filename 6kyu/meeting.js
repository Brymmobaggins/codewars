/*John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.

Notes
You can see another examples in the "Sample tests".*/

function meeting(string) {

    let result = []
    string = string.split(";")
    for (let i = 0; i < string.length; i++) {
        let name = string[i].split(":")
        //  convert firstname to uppercase
        let first_name = name[0].toUpperCase()

        // convert last name to Uppercase
        let last_name = name[1].toUpperCase()
        result.push("(" + last_name + ", " + first_name + ")")
    }
    // sort it alphabetical order and join
    return result.sort().join("")
}
console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))
