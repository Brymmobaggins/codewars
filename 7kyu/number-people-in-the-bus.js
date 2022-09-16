// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

function number(busStop) {
    let numOfPeople = 0     // create a variable that holds number of people
    for (let i = 0; i < busStop.length; i++) { // loop through the array 
        numOfPeople += busStop[i][0] - busStop[i][1] // subract the first element from the second element of each iteration/pair and assign it to numOfPeople
    }
    return numOfPeople          // return num of people

}

console.log(number([[10, 0], [3, 5], [5, 8]]))  // 5