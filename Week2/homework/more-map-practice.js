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
const durations = mondayTasks.map(x => x.duration);
console.log(durations);