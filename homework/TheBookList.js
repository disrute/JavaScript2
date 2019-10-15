const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    img: 'https://images-na.ssl-images-amazon.com/images/I/416Hql52NCL._SY346_.jpg'
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg'
  },
];
const br = document.createElement('br');

// Iterate through the array of books.
books.forEach(function (arrItem) {
  var titleAndAuthor = arrItem.title + " by " + arrItem.author;
  const p = document.createElement('p');
  p.innerHTML = titleAndAuthor;
  p.classList = 'book';
  document.body.appendChild(p);
});

// Use a <ul> and <li> to display the books.
const ul = document.createElement('ul');
document.body.appendChild(ul);
books.forEach(function (item) {
  li = document.createElement('li');
  li.innerText = `Title: ${item.title} 
  Author: ${item.author} 
  Already read? ${item.alreadyRead}`;
  ul.appendChild(li);
  const img = document.createElement('img');
  img.src = item.img;
  li.appendChild(img);

  if (item.alreadyRead === true) {
    li.style.backgroundColor = "green";
  } else li.style.backgroundColor = "red";

});

/*books.forEach(function (item) {
  const li = document.createElement('li');
  li.innerHTML = item.title;
  ul.appendChild(li);
});

/*For each book, create a <p> element with the book title and author and append it to the page.
Add an <img> to each book that links to a URL of the book cover.
Change the style of the book depending on whether you have read it (green) or not (red).
*/