import capitalize from "./capitalize";

test("Capitalize apple", () => {
  expect(capitalize("apple")).toBe("Apple");
});

test("Capitalize banana", () => {
  expect(capitalize("banana")).toBe("Banana");
});
