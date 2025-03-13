/**
 * Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.
 *
 * For example (Input --> Output)
 *
 * "Yes" --> "Yes?"
 * "No?" --> "No?"
 *
 * @format
 */

function ensureQuestion(s) {

    // if the string ends with "?" it iwll return the string as it is
  if (s.endsWith("?")) {
    return s;

    // else it will return the string with a "?" appended to the end
  } else {
    return s + "?";
  }
}
console.log(ensureQuestion("Yes")); 
console.log(ensureQuestion("No?"));
 

// const ensureQuestion = s => s.endsWith("?") ? s : s + "?";