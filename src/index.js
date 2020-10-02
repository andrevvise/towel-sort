
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (arguments.length === 0 || !matrix.length) return [];

  let arr = [];

  for (let i = 0; i < matrix.length; i++) {
       if ((i - 1) % 2 !== 0) arr = arr.concat(matrix[i]);
       else arr = arr.concat(matrix[i].reverse());
  }
  
  return arr;
}
