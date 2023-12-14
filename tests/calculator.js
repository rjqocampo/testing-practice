function createCalculator() {
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function divide(a, b) {
    return a / b;
  }

  function multiply(a, b) {
    return a * b;
  }

  return {
    add,
    subtract,
    divide,
    multiply,
  };
}

const calculator = createCalculator();
console.log(calculator.subtract(6, 3));
console.log(calculator.subtract(5, 10));

export default createCalculator;
