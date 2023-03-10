//ici on met les fonctions que l'on veut tester

const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  }
};
module.exports = { fizzBuzz }; // ici on export la fonction pour pouvoir la tester dans test.spec.js
