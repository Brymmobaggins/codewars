/*DESCRIPTION:
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.*/

function rowWeights(arr) {
    let result = []
    let sumTeam1 = 0
    let sumTeam2 = 0
    for (let i = 0; i < arr.length; i += 2) {
        sumTeam1 += arr[i]
    }
    for (let j = 1; j < arr.length; j += 2) {
        sumTeam2 += arr[j]

    }
    result.push(sumTeam1)
    result.push(sumTeam2)

    return result
}
console.log(rowWeights([13, 27, 49]))

// solution 2

function rowWeights(arr) {
    let team1 = 0
    let team2 = 0
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            team1 += arr[i]
        } else {
            team2 += arr[i]
        }
    }
    return [team1, team2]
}
console.log(rowWeights([90, 0, 90]))