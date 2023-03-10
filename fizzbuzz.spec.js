//on import la fonction à tester :
const { fizzBuzz } = require("./fizzbuzz");

//ici on fait le test
describe("Test FizzBuzz", () => {
  test("divisible par 3", () => {
    //GIVEN (ce que je donne à ma fonction):
    const essai = 9;
    // WHEN (je le passe à ma fonction):
    const when = fizzBuzz(essai);
    // THEN (expected result -- retourné par ta fonction):
    expect(when).toEqual("Fizz");
  });
  test("divisible par 5", () => {
    //GIVEN
    const essai = 5;
    //WHEN
    const when = fizzBuzz(essai);
    //THEN
    expect(when).toEqual("Buzz");
  });
  test("divisible par 3 ET 5", () => {
    //GIVEN
    const essai = 3000;
    //WHEN
    const when = fizzBuzz(essai);
    //THEN
    expect(when).toEqual("FizzBuzz");
  });
});
