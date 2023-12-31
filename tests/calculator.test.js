import createCalculator from "./calculator";

const calculator = createCalculator();

test("Add 2 + 3 equals 5", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("Add 10 + 10 equals 20", () => {
  expect(calculator.add(10, 10)).toBe(20);
});

test("Subtract 6 - 3 equals 3", () => {
  expect(calculator.subtract(6, 3)).toBe(3);
});

test("Subtract 5 - 10 equals -5", () => {
  expect(calculator.subtract(5, 10)).toBe(-5);
});

test("Divide 25 / 5 equals 5", () => {
  expect(calculator.divide(25, 5)).toBe(5);
});

test("Divide 1 / 2 equals 0.5", () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test("Multiply 3 * 3 equals 9", () => {
  expect(calculator.multiply(3, 3)).toBe(9);
});

test("Multiply 2.5 * 4 equals 10", () => {
  expect(calculator.multiply(2.5, 4)).toBe(10);
});
