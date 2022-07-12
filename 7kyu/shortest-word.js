// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// my solution
function findShort(string) {
    let arrayStrings = string.split(" ")
    let shortest = arrayStrings[0]

    for (let i = 0; i < arrayStrings.length; i++) {
        if (arrayStrings[i].length < shortest.length) {
            shortest = arrayStrings[i]
        }
    }
    return shortest.length
}