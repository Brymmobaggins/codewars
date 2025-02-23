/**
 * Build a Lunch Picker Program
 * In this lab, you'll build a program that helps in managing lunch options. You'll work with an array of lunches, add and remove items from the array, and randomly select a lunch option.
 *
 * Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.
 *
 * User Stories:
 *
 * You should create a lunches variable and assign it an empty array that will be used to store lunch items.
 *
 * You should create a function addLunchToEnd that takes an array as the first argument and a string as the second argument. The function should:
 *
 * Add the string to the end of the array.
 * Log the string "[Lunch Item] added to the end of the lunch menu." to the console, where [Lunch Item] is the string passed to the function.
 * Return the updated array.
 * You should create a function addLunchToStart that takes an array as the first argument and a string as the second argument. The function should:
 *
 * Add the string to the start of the array.
 * Log the string "[Lunch Item] added to the start of the lunch menu." to the console, where [Lunch Item] is the string passed to the function.
 * Return the updated array.
 * You should create a function removeLastLunch that takes an array as its argument. The function should:
 *
 * Remove the last element from the array.
 * If the removal is successful, log the string "[Lunch Item] removed from the end of the lunch menu." to the console, where [Lunch Item] is the element removed from the array.
 * If the array is empty, log the string "No lunches to remove." to the console.
 * Return the updated array.
 * You should create a function removeFirstLunch that takes an array as its argument. The function should:
 *
 * Remove the first element from the array.
 * If the removal is successful, log the string "[Lunch Item] removed from the start of the lunch menu." to the console, where [Lunch Item] is the element removed from the array.
 * If the array is empty, log the string "No lunches to remove." to the console.
 * Return the updated array.
 * You should create a function getRandomLunch that takes an array as its argument. The function should:
 *
 * Select a random element from the array.
 * If successful, log the string "Randomly selected lunch: [Lunch Item]" to the console, where [Lunch Item] is a random element in the array.
 * If the array is empty, log the string "No lunches available." to the console.
 * You should create a function showLunchMenu that takes an array as its argument and:
 *
 * If there are elements in the array, logs the string "Menu items: [Lunch Item], [Lunch Item]... to the console, where each [Lunch item] is one of the elements in the array, in order.
 * If the array is empty, logs the string "The menu is empty." to the console.
 *
 * @format
 */
let lunches = [];

function addLunchToEnd(lunchArr, lunchItem) {
  lunchArr.push(lunchItem);

  console.log(`${lunchItem} added to the end of the lunch menu.`);

  return lunchArr;
}

function addLunchToStart(lunchArr, lunchItem) {
  lunchArr.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);

  return lunchArr;
}

function removeLastLunch(lunchArr) {
  if (lunchArr.length === 0) {
    console.log("No lunches to remove.");
  }

  const removedLunch = lunchArr.pop();

  if (removedLunch) {
    console.log(`${removedLunch} removed from the end of the lunch menu.`);
  }

  return lunchArr;
}

function removeFirstLunch(lunchArr) {
  if (lunchArr.length === 0) {
    console.log("No lunches to remove.");
  }

  const firstLunchRemoved = lunchArr.shift();
  if (firstLunchRemoved) {
    console.log(
      `${firstLunchRemoved} removed from the start of the lunch menu.`
    );
  }

  return lunchArr;
}

function getRandomLunch(lunchArr) {
  // get random lunch from the array
  const randomIndex = Math.floor(Math.random() * lunchArr.length);
  const randomLunch = lunchArr[randomIndex];
  if (randomLunch) {
    console.log(`Randomly selected lunch: ${randomLunch}`);
  }
  if (lunchArr.length === 0) {
    console.log("No lunches available.");
  }
}

function showLunchMenu(lunchArr) {
  if (lunchArr.length === 0) {
    console.log("The menu is empty.");
  } else {
    const menuItems = lunchArr.join(", ");
    console.log(`Menu items: ${menuItems}`);
  }
}
