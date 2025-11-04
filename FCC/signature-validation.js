/**
 * Given a message string, a secret key string, and a signature number, determine if the signature is valid using this encoding method:
 *
 * Letters in the message and secret key have these values:
 * a to z have values 1 to 26 respectively.
 * A to Z have values 27 to 52 respectively.
 * All other characters have no value.
 * Compute the signature by taking the sum of the message plus the sum of the secret key.
 * For example, given the message "foo" and the secret key "bar", the signature would be 57:
 *
 * @format
 */
// ...existing code...
function verify(message, key, signature) {
  let messageSum = 0;
  let keySum = 0;

  for (let char of message) {
    if (char >= "a" && char <= "z") {
      // a..z => 1..26
      messageSum += char.charCodeAt(0) - 96;
    } else if (char >= "A" && char <= "Z") {
      // A..Z => 27..52 (65 -> 27)
      messageSum += char.charCodeAt(0) - 38;
    }
  }

  for (let i of key) {
    if (i >= "a" && i <= "z") {
      keySum += i.charCodeAt(0) - 96;
    } else if (i >= "A" && i <= "Z") {
      keySum += i.charCodeAt(0) - 38;
    }
  }

  return messageSum + keySum === signature;
}
// ...existing code...
console.log(verify("foo", "bar", 57));

