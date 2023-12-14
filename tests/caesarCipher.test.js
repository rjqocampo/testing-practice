import createCaesarCipher from "./caesarCipher";

const caesarCipher = createCaesarCipher();

test("Cipher A zebra! with shift of 3", () => {
  expect(caesarCipher.cipher("A zebra!", 3)).toBe("D cheud!");
});

test("Cipher A zebra? with a shift of 5", () => {
  expect(caesarCipher.cipher("A zebra?", 5)).toBe("F ejgwf?");
});
