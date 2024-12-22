const fetchMovieData = async () => {
    try {
        const apiKey = 'your_api_key_here'; // Replace with your OMDB API key
        const movieTitle = 'Inception';
        const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.Response === "False") {
            console.log(`Movie not found: ${data.Error}`);
            return;
        }

        const movieDetails = {
            title: data.Title,
            year: data.Year,
            genre: data.Genre,
            director: data.Director,
            actors: data.Actors,
            plot: data.Plot,
            language: data.Language,
            runtime: data.Runtime,
            imdbRating: data.imdbRating,
            poster: data.Poster
        };

        console.log('Movie Details:');
        console.log(`Title: ${movieDetails.title}`);
        console.log(`Year: ${movieDetails.year}`);
        console.log(`Genre: ${movieDetails.genre}`);
        console.log(`Director: ${movieDetails.director}`);
        console.log(`Actors: ${movieDetails.actors}`);
        console.log(`Plot: ${movieDetails.plot}`);
        console.log(`Language: ${movieDetails.language}`);
        console.log(`Runtime: ${movieDetails.runtime}`);
        console.log(`IMDB Rating: ${movieDetails.imdbRating}`);
        console.log(`Poster: ${movieDetails.poster}`);

        return movieDetails;
    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
};

fetchMovieData();
