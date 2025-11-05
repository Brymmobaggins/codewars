/**
 * Given two integers (a number of rows and a number of columns), return a matrix (an array of arrays) filled with zeros (0) of the given size.
 *
 * For example, given 2 and 3, return:
 *
 * [
 *   [0, 0, 0],
 *   [0, 0, 0]
 * ]
 *
 * @format
 */

function buildMatrix(rows, cols) {
  // validate inoput

  if ((typeof rows !== "number") | (typeof cols !== "number")) return [];
  rows = Math.floor(rows);
  cols = Math.floor(cols);
  if (rows < 1 || cols < 1) return [];

  var matrix = [];

  for (var r = 0; r < rows; r++) {
    var row = [];
    for (var c = 0; c < cols; c++) row.push(0);
    matrix.push(row);
  }
  return matrix;
}
