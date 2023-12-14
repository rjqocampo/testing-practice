import analyzeArray from "./analyzeArray";

test("Analyze array [1, 8, 3, 4, 2, 6]", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Analyze array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual({
    average: 5.5,
    min: 1,
    max: 10,
    length: 10,
  });
});

test("Analyze array [100, 200, 300, 400, 500]", () => {
  expect(analyzeArray([100, 200, 300, 400, 500])).toStrictEqual({
    average: 300,
    min: 100,
    max: 500,
    length: 5,
  });
});
