const assert = require('assert');
const {expect} = require('chai');

const {
  sum, mult, isAdult, sortStrArrayUp, sortStrArrayDown, sortNumArrayUp, sortNumArrayDown,
  isOddNumber, isEvenNumber, isPalindrome
} = require('../index.js');

describe('function sum', () => {
  it('should function sum equals 5 ', () => {
    //assert.equal(sum(2, 3), 5);
    expect(sum(2, 4)).eq(6);
  });


  it('should function sum not equal 0', () => {
    expect(sum(2, 4)).to.not.eq(0);
  });

});

describe('function mult', () => {
  it('should function mult equals 6 ', () => {
    expect(mult(2, 3)).eq (6);
  });

  it('should function mult not equal 4', () => {
    expect(mult(2, 3)).to.not.eq(4);
  });

});


describe('function isAdult', () => {
  it('should function isAdult equal true for age 21 and over', () => {
    expect(isAdult(21)).eq (true);
  });

  it('should function isAdult equal false for age under 21', () => {
    expect(isAdult(16)).eq(false);
  });
});

describe('function array sort', () => {
  let numArr = [22, 9, 13, 3, 1];
  let strArr = ['a', 'ab', 'b', 'A', 'AB', 'B'];

  it('should sort a number array', () => {
    let numSorted = numArr.sort((a, b) => a - b);
    assert.deepEqual(sortNumArrayUp(numArr), numSorted);
  });

  it('should sort a number array', () => {
    let numSorted = numArr.sort((a, b) => b - a);
    assert.deepEqual(sortNumArrayDown(numArr), numSorted);
  });

  it('should sort a string array', () => {
    let strSorted = strArr.sort((a, b) => a - b);
    assert.deepEqual(sortStrArrayUp(strArr), strSorted);
  });

  it('should sort a string array', () => {
    let strSorted = strArr.sort((a, b) => a - b);
    assert.deepEqual(sortStrArrayDown(strArr), strSorted);
  });
});

describe('function number Odd/Even', () => {
  it('should check number is odd', () => {
    assert.equal(isOddNumber(17), true);
  });

  it('should check number is even', () => {
    assert.equal(isEvenNumber(12), true);
  });

});

describe('function checks if string is a palindrome', () => {
  it('should check if ogo is palindrome', function () {
    assert.equal(isPalindrome('ogo'), true);
  });

  it('should check if og is not a palindrome', function () {
    assert.notEqual(isPalindrome('og'), true);
  });

});