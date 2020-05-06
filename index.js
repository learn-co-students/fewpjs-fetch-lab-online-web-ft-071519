
 function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json))
}


function renderBooks(json) {
  const main = document.querySelector('main')
  
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
    })
  
}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
/*
function fetchCharacters() {
  return fetch("https://anapioficeandfire.com/api/character")
  .then(resp => resp.json())
  .then(json => renderBooks(json))
}


function renderCharacters(json) {
  const main = document.querySelector('main')

  json.forEach(character => {
    const h3 = document.createElement('h3')
    h3.innerHTML = `<h3>${character.name}</h3`
    main.appendChild(h3)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchCharacters()
})

*/