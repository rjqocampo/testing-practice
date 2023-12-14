function analyzeArray(array) {
  const average =
    array.reduce((total, current) => total + current, 0) / array.length;

  const min = Math.min(...array);
  const max = Math.max(...array);
  const { length } = array;

  return {
    average,
    min,
    max,
    length,
  };
}

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
console.log(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(analyzeArray([100, 200, 300, 400, 500]));

export default analyzeArray;
