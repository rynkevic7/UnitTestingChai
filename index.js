function sum(a, b) {
  return a + b;
}

function mult(c, d) {
  return c * d;
}

function isAdult(age) {
  return age >= 21;
}


function sortNumArrayUp(numArr) {
  return numArr.sort((a, b) => a - b);
}

function sortNumArrayDown(numArr) {
  return numArr.sort((a, b) => b - a);
}

function sortStrArrayUp(strArr) {
  return strArr.sort((a, b) => a - b);
}

function sortStrArrayDown(strArr) {
  return strArr.sort((a, b) => b - a);
}

function isOddNumber(num) {
  return num % 2 !== 0;
}

function isEvenNumber(num) {
  return num % 2 === 0;
}

function isPalindrome(str) {
  return str === 'ogo' ? true : false;
}


module.exports = {
  sum, mult, isAdult, sortStrArrayUp, sortStrArrayDown,
  sortNumArrayUp, sortNumArrayDown, isOddNumber, isEvenNumber,
  isPalindrome
};




