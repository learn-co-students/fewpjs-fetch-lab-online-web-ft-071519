function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
      .then(resp => resp.json())
      // List all books
      .then(json => renderBooks(json))
}

function renderBooks(json) {
  const main = document.querySelector('main');
  json.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = `<h2>${book.name}</h2>`;
    main.appendChild(h2);
  })
}

// function fetchFifthBook() {
//   return fetch('https://anapioficeandfire.com/api/books')
//       .then(resp => resp.json())
//       // List 5th book
//       .then(json => renderFifthBook(json))
// }
//
// function renderFifthBook(json) {
//   const main = document.querySelector('main');
//   let books = [];
//   json.forEach(book => {
//     books.push(book);
//   });
//     const h3 = document.createElement('h3');
//     h3.innerHTML = `<h3>5th book: ${books[4].name}</h3>`;
//     main.appendChild(h3);
// }


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  // fetchFifthBook();

});
