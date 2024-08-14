/*
Write a function twoDimensionalSum(arr) 

that takes in a 2D array of numbers and
returns the total sum of all numbers.
*/

// Your code here 
function twoDimensionalSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let subarrays = arr[i];
        for (let j = 0; j < subarrays.length; j++) {
            sum += subarrays[j];
        }

    }

    return sum;
}


let arr1 = [[1, 3], [-4, 7, 10], [2]];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [[], [3, 1, 2]];
console.log(twoDimensionalSum(arr2)); // 6

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = twoDimensionalSum;
