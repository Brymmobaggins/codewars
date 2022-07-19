// DESCRIPTION:
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removURLanchor(url) {
    return url.spit("#").shift()              // split the string starting from `#` and return it 
}