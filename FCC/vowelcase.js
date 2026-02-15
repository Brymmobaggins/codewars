/**
 * Given a string, return a new string where all vowels are converted to uppercase and all other alphabetical characters are converted to lowercase.
 *
 * Vowels are "a", "e", "i", "o", and "u" in any case.
 * Non-alphabetical characters should remain unchanged.
 *
 * @format
 */

function vowelCase(str) {
  let vowel = "aeiou";
  let consonant = "bcdrhjfgiklmnpqrstwxyz";
  let newStr = "";
  for (const char of str) {
    if (vowel.includes(char.toLowerCase())) {
      newStr += char.toUpperCase();
    } else if (consonant.includes(char.toLowerCase())) {
      newStr += char.toLowerCase();
    } else {
      newStr += char;
    }
  }
  return newStr;
}
console.log(vowelCase("vOwelCase"));
