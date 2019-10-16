'use strict';

// (In the JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = 'Arial, sans-serif';

//(In the JavaScript) Replace each of the spans(nickname, fav - food, hometown) with your own information.
document.getElementsByTagName('li')[0].firstElementChild.innerText = 'Lochie';
document.getElementsByTagName('li')[1].firstElementChild.innerText = 'Hamburger';
document.getElementsByTagName('li')[2].firstElementChild.innerText = 'Melbourne';

// Iterate through each li and change the class to "list-item".
const lis = document.getElementsByTagName('li');
// use for-of
for (let li of lis) {
  li.className = 'list-item';
  console.log(li);
}
//Create a new img element and set its src attribute to a picture of you.Append that element to the page.
const img = document.createElement('img');
img.src = 'https://petco.scene7.com/is/image/PETCO/253537-Center-4?$ProductDetail-large$';
document.body.appendChild(img);