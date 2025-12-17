/**
 * Remove all vowels (a, e, i, o, u) from the string, replace all numbers with their word equivalents (e.g., 1 -> "one", 2 -> "two"), and return the modified string.
 *
 * @format
 */

function removeVowel(string) {
  let vowel =  new set("aeiouAEIOU");
  let removedVowel = "";

  for (let i = 0; i < string.length; i++) {
    if (!vowel.has(string[i])) {
      removedVowel += string[i];
    }
  }

  return removedVowel;
}
console.log(removeVowel("helloworld"));
