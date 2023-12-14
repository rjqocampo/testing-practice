import reverseString from "./reverseString";

test("Reverse apple", () => {
  expect(reverseString("apple")).toBe("elppa");
});

test("Reverse banana", () => {
  expect(reverseString("banana")).toBe("ananab");
});
