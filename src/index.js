
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    let temp = [];
    if (matrix) {
      matrix.forEach((row, rowInd) => {
        temp = [];
        row.forEach(item => {
          if (rowInd % 2) {
            temp.unshift(item);
          }else{
            result.push(item);
          }
        })
        result = result.concat(temp);
      });
    }
  return result;
}