const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
];

// Iterate through the array of books.
books.forEach(function (arrItem) {
  var titleAndAuthor = arrItem.title + " by " + arrItem.author;
  const p = document.createElement('p');
  p.innerHTML = titleAndAuthor;
  document.body.appendChild(p);
});

// Use a <ul> and <li> to display the books.
const ul = document.createElement('ul');
document.body.appendChild(ul);



books.forEach(function (item) {
  const li = document.createElement('li');
  li.innerHTML = item.title;
  ul.appendChild(li);
});

/*For each book, create a <p> element with the book title and author and append it to the page.
Add an <img> to each book that links to a URL of the book cover.
Change the style of the book depending on whether you have read it (green) or not (red).
*/