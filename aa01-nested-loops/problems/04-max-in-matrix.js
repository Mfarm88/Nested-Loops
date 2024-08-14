/*
Write a function maxInMatrix(matrix) 
  that takes in a 2-dimensional array (matrix) and 
    returns the largest value in the matrix. 
    
    The matrix contains at least one value.
*/

function maxInMatrix(matrix) {
  // Your code here 

  let max = []
    for (let i = 0; i < matrix.length; i++) {

      for (let j = 0; j < matrix[i].length; j++) {

        if (matrix[i][j] > max) {
          max = matrix[i][j];
        } 
      }
    }

    return max
}

matrix = [
  [11, 2, -99],
  [20, 19, 10],
  [47, 72, 56],
];

console.log(maxInMatrix(matrix)); // 72

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxInMatrix;
