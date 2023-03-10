//on import la fonction à tester :
const { fizzBuzz } = require("./fizzBuzz");

//ici on fait le test :
describe("Test FizzBuzz", () => {
  test("divisible par 3", () => {
    expect(fizzBuzz()[3]).toEqual("Fizz");
  });
  test("divisible par 5", () => {
    expect(fizzBuzz()[5]).toEqual("Buzz");
  });
  test("divisible par 3 et par 5", () => {
    expect(fizzBuzz()[15]).toEqual("FizzBuzz");
  });
  test("non divisible par 3 ou 5", () => {
    expect(fizzBuzz()[7]).toEqual(7);
  });
});
