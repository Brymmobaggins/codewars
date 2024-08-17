/**
 * ASC Week 1 Challenge 4 (Medium #1)
 *
 * Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.
 *
 * Note that spaces should be ignored in this case.
 *
 * Examples
 * "Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
 * "Why isn't my code working?"  -->  "W  H  Y  I  S  N  '
 *
 * @format
 */

// answer one
function vaporcode(string) {
  let newString = "";
  for (let char of string) {
    if (char === " ") {
      newString += char.trim();
    } else {
      newString += char + "  ";
    }
  }
  return newString.toUpperCase();
}
console.log(vaporcode("Lets go to the movies"));

// answer 2
function vaporcode(string) {
  return string.toUpperCase().split(" ").join("").split("").join("  ");
}
console.log(vaporcode("Lets go to the movies"))

// covert the string, split the string, join by removing single space, split in character, and join with 2 spaces