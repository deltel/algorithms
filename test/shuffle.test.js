const { shuffle } = require("../src/shuffle");
const { range } = require("../src/range");

describe("shuffle", () => {
  test("shuffles", () => {
    const initialArr = range(0, 20);
    const shuffledArr = shuffle(initialArr);

    expect(initialArr).toEqual([...initialArr]);
    expect(initialArr).not.toEqual(shuffledArr);
  });
});
