/** @format */

function solution(value) {
  return "Value is " + ("00000" + value).slice(-6);
}

console.log(solution("33"));
