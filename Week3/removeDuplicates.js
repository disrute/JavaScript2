'use strict';

// write a function which removes duplicate letters in a given character array.
// USING SET TECHNQUE:

const letters = ['a', 'a', 'b', 'c', 'c', 'd'];

function removeDuplicates(array) {
  let result = new Set(array);
  return result;
}

let fixedArr = removeDuplicates(letters);
console.log(fixedArr);

// Using Array.Filter method:

function removeUsingFilter(array) {
  let result 
}