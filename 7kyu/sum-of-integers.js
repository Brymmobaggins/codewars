/**
 * Your task in this kata is to implement a function that calculates the sum of the integers inside a string.
 * For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.
 *
 * Note: only positive integers will be tested.
 *
 * @format
 */

function sumOfIntegersInString(s) {
  const searchNumber = s.split(/[^0-9]/gi);
  let total = 0;
  for (let i = 0; i < searchNumber.length; i++) {
    total += Number(searchNumber[i]);
  }
  return total;
}
console.log(sumOfIntegersInString("ttt898"));
