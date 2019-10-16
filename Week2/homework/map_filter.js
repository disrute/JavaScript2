// rewrite this function using Array.map() + Array.filter()

function doubleEvenNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
//console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console

function newDoubleEvenNumbers(numbers) {
  const numbersModified = numbers.map(x => x * 2).filter(num => num % 2 === 0);
  return numbersModified;
}
console.log(newDoubleEvenNumbers(myNumbers));

tempArr = ['string one', 'name of someone', 'something else'];

tempArr = tempArr.map(x => x.length);
console.log(tempArr);

// use regex to test if strings inside array contain an 'i' character.
arrayToTest = ['is there an i in this? how many?', 'just test for an i', 'not an eye'];

// below code maps a new array where each element (x) is tested for containing an 'i' character,
// then the array is filtered to only host the elements which prove true.
result = arrayToTest.map(x => /i/.test(x)).filter(x => x === true);
console.log(result);