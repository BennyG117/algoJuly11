/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/


/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
*/

const squareMatrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
  */

const squareMatrix2 = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
  */


function diagonalDifference(sqrMatrix) {
  //determine the length of the matrix (at least 3 movies long)
  let length = sqrMatrix.length;

  //track numbers for the diagonals
  let diagonalLeft = 0;
  let diagonalRight = 0;

  //iterate through and add the elements?
  for (let i = 0; i < length; i++) {
    //using [i][i]: traversing an array of an array
    diagonalLeft += sqrMatrix[i][i];
    //using [i][length -1 -i]: traverses down and left
    diagonalRight += sqrMatrix[i][length - 1 - i];
  }
  //returns the absolute difference between the numbers using Math.abs()
  return Math.abs(diagonalLeft - diagonalRight);
}

console.log(diagonalDifference(squareMatrix1));
console.log("=====================\n");

console.log(diagonalDifference(squareMatrix2));
console.log("=====================\n");


/*****************************************************************************/
console.log("************************\n");

//! Alt Solution:

function diagonalDifference2(matrix) {

    let topLeftToBotRightSum = 0;

    let topRightToBotLeftSum = 0;

    for (let i = 0; i < matrix[0].length; ++ i) {

        topLeftToBotRightSum += matrix[i][i];         
        
        topRightToBotLeftSum += matrix[i][matrix[0].length - 1 - i];

    }

    return Math.abs(topLeftToBotRightSum - topRightToBotLeftSum);

}

console.log(diagonalDifference2(squareMatrix1));
console.log("=====================\n");

console.log(diagonalDifference2(squareMatrix2));
console.log("=====================\n");

/*****************************************************************************/
console.log("***************************\n");


//! Alt Solution:
function diagonalDifference3(sqrMatrix) {
    // create variable to track sum
    let leftD = 0, rightD = 0;
    // iterate through array
    for (let i = 0; i < sqrMatrix.length; i++){
        // iterate forward to get the sum starting from beginning
        leftD  += sqrMatrix[i][i];
        // iterate forward but start from last index
        rightD += sqrMatrix[i][sqrMatrix.length-1-i];
    }
    // return absolute value of the difference between the two numbers
    return Math.abs(leftD-rightD)
}
console.log(diagonalDifference3(squareMatrix1));
console.log("=====================\n");

console.log(diagonalDifference3(squareMatrix2));
console.log("=====================\n");


/*****************************************************************************/
console.log("***************************\n");


//! Alt Solution:
function diagonalDifference4(sqrMatrix) {
    let diag1 = 0;
    let diag2 = 0;
    for (let i = 0; i < sqrMatrix.length; i++) {
        diag1 += sqrMatrix[i][i];
        diag2 += sqrMatrix[i][sqrMatrix.length - i - 1];
    }
    let result = Math.abs(diag1 - diag2);
    return result;
}
console.log(diagonalDifference4(squareMatrix1))
console.log("=====================\n");

console.log(diagonalDifference4(squareMatrix2))
console.log("=====================\n");
