// ici on ecrit les tests
//d'abord on import le fichier des fonction a tester
const { leapYears } = require("./leapYears");

describe("test leapyears", () => {
  test("divisible par 400", () => {
    //GIVEN (ce que je donne à ma fonction):
    const given = 800;
    //WHEN (event occurs)
    const when = leapYears(given);
    //THEN (result expected)
    expect(when).toEqual(true);
  });
  test("divisible par 100 MAIS PAS par 400", () => {
    //GIVEN (ce que je donne à ma fonction):
    const given = 1700;
    //WHEN (event occurs)
    const when = leapYears(given);
    //THEN (result expected)
    expect(when).toEqual(false);
  });
  test("divisible par 4 MAIS PAS par 100", () => {
    //GIVEN (ce que je donne à ma fonction):
    const given = 2008;
    //WHEN (je le passe à ma fonction)
    const when = leapYears(given);
    //THEN (result expected)
    expect(when).toEqual(true);
  });
  test("NON divisible par 4", () => {
    //GIVEN (ce que je donne à ma fonction):
    const given = 2019;
    //WHEN (je le passe à ma fonction)
    const when = leapYears(given);
    //THEN (result expected)
    expect(when).toEqual(false);
  });
});
