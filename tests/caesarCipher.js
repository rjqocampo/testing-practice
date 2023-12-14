function createCaesarCipher() {
  const alphabetObj = {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    g: null,
    h: null,
    i: null,
    j: null,
    k: null,
    l: null,
    m: null,
    n: null,
    o: null,
    p: null,
    q: null,
    r: null,
    s: null,
    t: null,
    u: null,
    v: null,
    w: null,
    x: null,
    y: null,
    z: null,
  };

  const alphabetArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function shiftAlphabet(number) {
    console.log(number);
    const arrCopy = alphabetArr.slice();
    const sliceArr = arrCopy.splice(0, number);
    return arrCopy.concat(sliceArr);
  }

  function updateAlphabet(number) {
    const arr = shiftAlphabet(number);

    for (const key in alphabetObj) {
      alphabetObj[key] = arr.shift();
    }

    console.log(alphabetObj);
  }

  function cipher(string, number) {
    updateAlphabet(number);

    const newArr = [];

    Array.from(string).forEach((character) => {
      console.log("LOG", character);
      const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/;

      if (punctuationRegex.test(character)) {
        newArr.push(character);
      } else if (character === character.toUpperCase() && character !== " ") {
        newArr.push(alphabetObj[character.toLowerCase()].toUpperCase());
      } else if (character === character.toLowerCase() && character !== " ") {
        newArr.push(alphabetObj[character]);
      } else {
        newArr.push(character);
      }
    });

    return newArr.join("");
  }

  return {
    cipher,
  };
}

const caesarCipher = createCaesarCipher();
console.log(caesarCipher.cipher("A zebra!", 5));

export default createCaesarCipher;
