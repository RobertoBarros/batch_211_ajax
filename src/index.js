// ALGOLIA JS - POST


const address = document.getElementById('address');
const searchAlgoliaPlaces = (event) => {

 fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: event.currentTarget.value })
  })
    .then(response => response.json())
    .then((data) => {
      address.innerText = data.hits[0].locale_names.default[0]
    });

};

const input = document.querySelector("#searchAlgolia");
input.addEventListener("keyup", searchAlgoliaPlaces);


// MOVIES JS - GET


const moviesList = document.getElementById('movies');

const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let query = document.getElementById('search').value;

  searchMovie(query);

});

const searchMovie = (query) => {
  let url = `http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`;

  moviesList.innerHTML = "";

  fetch(url)
    .then(response => response.json())
    .then((data) => {

      data.Search.forEach((movie) => {
        let name = `<p>${movie.Title}</p>`;

        let image = `<img src="${movie.Poster}" class="img-thumbnail" width='100'>`;

        let li = `<li class="list-group-item"><a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">${name}${image}</a></li>`;

        moviesList.insertAdjacentHTML('beforeend', li);

      });

  });
}

