import createCalculator from "./calculator";

const calculator = createCalculator();

test("Add 2 + 3 equals 5", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("Add 10 + 10 equals 20", () => {
  expect(calculator.add(10, 10)).toBe(20);
});
