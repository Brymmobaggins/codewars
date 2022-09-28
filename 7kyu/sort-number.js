// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums) {
    let newArray = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === "") {
            return newArray
        }else{
            return 
        }

    }
    return newArray
}
console.log(solution([4, 5, 6, 7, 8]))