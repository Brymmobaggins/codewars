/** @format */

// Pet Age Calculator
// Given a pet type and age in human years, return the equivalent age in pet years using the following conversion table:

// Pet	Multiplier
// "dog"	7
// "cat"	6
// "rabbit"	8
// "hamster"	30
// "guinea pig"	12
// "goldfish"	6
// "bird"	5

const multipliers = {
  dog: 7,
  cat: 6,
  rabbit: 8,
  hamster: 30,
  "guinea pig": 12,
  goldfish: 6,
  bird: 5,
};

function petYears(pet, age) {
  if (typeof pet !== "string") {
    return undefined;
  }

  const petType = pet.trim().toLowerCase();
  const multiplier = multipliers[petType];

  if (multiplier === undefined) {
    return undefined;
  }

  return multiplier * age;
}
console.log(petYears("dog", 10));
