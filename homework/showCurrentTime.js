// Inside the JS file, write a function that adds the current time to the webpage.
// Make sure it's written in the HH:MM:SS notation (hour, minute, second). 
// Hint: use setInterval() to make sure the time stays current
// Have the function execute when it's loading in the browser

let myVar = setInterval(myTimer, 1000);

function myTimer() {
  let d = new Date();
  document.body.innerHTML = d.toLocaleTimeString();
}