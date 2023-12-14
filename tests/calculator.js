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
console.log(calculator.multiply(3, 3));
console.log(calculator.multiply(2.5, 4));

export default createCalculator;
