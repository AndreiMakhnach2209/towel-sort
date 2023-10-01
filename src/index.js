
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  matrix.forEach(row => {
    row.forEach(item => {
      result.push(item);
    })
  });
  return result;}