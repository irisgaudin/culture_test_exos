//ici on ecrit la fonction a tester

const leapYears = (year) => {
  if ((year % 100 === 0 && year % 400 !== 0) || year % 4 !== 0) {
    return false;
  }
  if (year % 400 === 0 || (year % 4 == 0 && year % 100 !== 0)) {
    return true;
  }
};

console.log(leapYears(2023));

module.exports = { leapYears };
