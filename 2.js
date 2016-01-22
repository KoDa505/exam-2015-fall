'use strict';

// Write a function that checks, if an array contains a number
// that has 5 as divisor. If it has it should return true otherwise false.

function hasDivisableBy5(array) {
  var isTrue = true;
  for (var i = 0; i < array.length; i ++)
    if (array[i]%5 === 0) {
      isTrue = true;
      break;
    }
    else {
      isTrue = false;
    }
  return isTrue
}



console.log(hasDivisableBy5([1, 8, 3, 6, 2])); // false
console.log(hasDivisableBy5([11, 7, 15, 9])); // true
