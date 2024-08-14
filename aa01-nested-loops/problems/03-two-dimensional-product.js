/*
Write a function twoDimensionalProduct(array) 
    that takes in a 2D array of numbers as an argument. 
    
    The function should return 
    the total product of all numbers multiplied together.
*/

// Your code here 

function twoDimensionalProduct(array) {
    let sum = 1;

    for (let i = 0; i < array.length; i++) {
        let subArray = array[i];

        for (let j = 0; j < subArray.length; j++) {
            sum *= subArray[j];
        }
    }

    return sum
}


let arr1 = [[6, 4], [5], [3, 1]];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [[11, 4], [2]];
console.log(twoDimensionalProduct(arr2)); // 88

let arr3 = [
  [-9, 8, 4],
  [8, 2],
];
console.log(twoDimensionalProduct(arr3)); // -4608

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = twoDimensionalProduct;
