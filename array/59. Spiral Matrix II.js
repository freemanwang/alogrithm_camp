/**
 * link: https://leetcode.com/problems/spiral-matrix-ii/
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    /**
     * n * n matrix, init 4 marks, left = 0; right = n-1; bot = n-1; top = 0
     * use col to record x-axis index and row to record y-axis index; [row, col] starts from lt to rt to rb to lb
     * remember to update cooperate marks when fill of each direction finished, for example, when lt to rt finish, should update top from 0 to 1 to mark first row filled
    */
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n).fill(null)
    }
    let num = 1; // num to fill in current cell
    let left = 0, right = n-1, top = 0, bottom = n-1;

    while (num <= n * n) {
        // left to right, top
        for (let col = left; col <= right; col++) {
            matrix[top][col] = num++;
        }
        top++; // this top side row is filled

        // top to bottom, right
        for (let row = top; row <= bottom; row++) {
            matrix[row][right] = num++;
        }
        right--; // this right side column is filled
        
        // right to left, bottom
        for (let col = right; col >= left; col--) {
            matrix[bottom][col] = num++;
        }
        bottom--; // bottom side row is filled
        
        // bottom to top, left
        for (let row = bottom; row >= top; row--) {
            matrix[row][left] = num++;
        }
        left++; // left side column is filled
    }

    return matrix;
};
console.log(generateMatrix(3));
