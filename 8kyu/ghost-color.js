/**
 * Create a class Ghost
 *
 * Ghost objects are instantiated without any arguments.
 *
 * Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated
 *
 * ghost = new Ghost();
 * ghost.color //=> "white" or "yellow" or "purple" or "red"
 *
 * @format
 */

class Ghost {
  constructor() {
    const colors = ["white", "yellow", "purple", "red"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
}

// Example usage
const ghost1 = new Ghost();
console.log(ghost1.color); // Output: "white", "yellow", "purple", or "red" (randomly chosen)

const ghost2 = new Ghost();
console.log(ghost2.color); // Output: "white", "yellow", "purple", or "red" (randomly chosen)
