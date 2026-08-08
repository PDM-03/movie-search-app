const searchButton = document.getElementById("searchButton");
const movieSearch = document.getElementById("movieSearch");
const results = document.getElementById("results");

searchButton.addEventListener("click", function() {
    const movie = movieSearch.value;

    const url = `https://www.omdbapi.com/?apikey=3d4a26fa&s=${movie}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            //results.textContent = data.Search[0].Title; // Try "console.log(data.Search[0])" and "console.log(data.Search[0].Title)" 
                                               // Originally just "data".
                                               // This is an array and the [0] takes the very first movie from the list.
            results.innerHTML = ""; // This clears the previous search result

            /* Displays all movie titles on the web page
            data.Search.forEach(movie => {
                const movieTitle = document.createElement("h2");
                movieTitle.textContent = movie.Title;

                results.appendChild(movieTitle);
            });
            */

            data.Search.forEach(movie => {
                const movieCard = document.createElement("div");
                movieCard.classList.add("movie-card");

                const poster = document.createElement("img");
                poster.src = movie.Poster;
                poster.alt = movie.Title;

                const movieTitle = document.createElement("h2");
                movieTitle.textContent = movie.Title;

                const movieYear = document.createElement("p");
                movieYear.textContent = movie.Year;

                movieCard.appendChild(poster);
                movieCard.appendChild(movieTitle);
                movieCard.appendChild(movieYear);

                results.appendChild(movieCard);
            })
        });
});