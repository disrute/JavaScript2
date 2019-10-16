const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

/*Write a program that outputs each of these inside an HTML file
Create an HTML and JavaScript file, link them together
Use the map and / or forEach function to put each hobby into a list item
Output the list items in an unordered list*/

const ul = document.createElement('ul');
document.body.appendChild(ul);

myHobbies.forEach((value, index) => {
  let li = document.createElement('li');
  li.innerText = value
  ul.appendChild(li);
});
