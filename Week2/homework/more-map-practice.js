/*Write a program that finds out what your hourly rate on a Monday would be
Multiply each duration by a per - hour rate for billing and sum it all up.
Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
Make sure the program can be used on any array of objects that contain a duration property with a number value*/

const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

// Use the map array function to take out the duration time for each task.
const durations = mondayTasks.map(x => x.duration).map(x => x * 25).map(x => x / 60);

//durations = durations.reduce(function (acc, hourlyRate) {
//   return acc + hourlyRate;
// })
// console.log(durations);

/*
30 + 120 + 240 + 60 = something
something / 60 = anotherthing
anotherthing * 25 = our pay.

*/

let fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

function filterLemon(arr) {
  //fruitBasket = 
  arr = arr.filter((x => x != 'Lemon'));
  //console.log(arr);
  return arr;
}
let newFruitBasket = filterLemon(fruitBasket);

console.log(`My mom bought me a fruit basket, containing ${newFruitBasket.toString()}!`);

// Remeber mean = sum of all / amount of values

const hackYourFutureMembers = [
  { name: 'Wouter', age: 33 },
  { name: 'Federico', age: 32 },
  { name: 'Noer', age: 27 },
  { name: 'Tjebbe', age: 22 },
];

const combinedAge = hackYourFutureMembers.map(x => x.age); //works.
console.log(combinedAge);


const mean = combinedAge.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(`The mean age is: ${mean}`);
//mean = mean / combinedAge.length - 1;

function calculateMean(arr) {
  let getAges = arr.map(x => x.age);
  let mean = getAges.reduce((a, b) => {
    return a + b;
  }, 0);
  console.log(mean);
  return mean;
}

const myFriendsAges = [
  { name: 'Lochie', age: 25 },
  { name: 'Gabi', age: 28 },
  { name: 'Frankie', age: 23 },
  { name: 'Elly', age: 28 },
  { name: 'Greg', age: 40 }
];

calculateMean(myFriendsAges);

