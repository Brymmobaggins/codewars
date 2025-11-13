/** @format */

/*Given a string, return an array with the number of vowels and number of consonants in the string.

Vowels consist of a, e, i, o, u in any case.
Consonants consist of all other letters in any case.
Ignore any non-letter characters.
For example, given "Hello World", return [3, 7].*/

function count(str) {
  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvwxyz";

  let vowelCount = 0;
  let consCount = 0;

  for (const char of String(str).toLowerCase()) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (consonants.includes(char)) {
      consCount++;
    }
  }

  return [vowelCount, consCount];
}
console.log(count("Hello World"));
