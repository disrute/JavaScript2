'use strict';

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const addTwenty = makeAdder(20);
const addFive = makeAdder(5);
const addThirty = makeAdder(30);


console.log(addFive(10));
console.log(addTwenty(4));
console.log(addThirty(6));
