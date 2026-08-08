const searchButton = document.getElementById("searchButton");
const movieSearch = document.getElementById("movieSearch");
const results = document.getElementById("results");

searchButton.addEventListener("click", function() {
    const movie = movieSearch.value;

    const url = `https://www.omdbapi.com/?apikey=3d4a26fa&s=${movie}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            results.textContent = data.Search[0].Title; // Try "console.log(data.Search[0])" and "console.log(data.Search[0].Title)" 
                                               // Originally just "data".
                                               // This is an array and the [0] takes the very first movie from the list.
        });
});