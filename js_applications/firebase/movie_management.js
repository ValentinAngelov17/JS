const firebaseUrl = 'api';

// Function to add a movie
async function addMovie(title, director, year) {
    const movie = { title, director, year };
    const response = await fetch(`${firebaseUrl}.json`, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    console.log('Movie added successfully:', data);
}

// Function to list all movies
async function listMovies() {
    const response = await fetch(`${firebaseUrl}.json`);
    const movies = await response.json();
    console.log('Movie Collection:');
    if (movies) {
        for (const id in movies) {
            const { title, director, year } = movies[id];
            console.log(`- ID: ${id}, Title: ${title}, Director: ${director}, Year: ${year}`);
        }
    } else {
        console.log('No movies available.');
    }
}

// Function to update a movie by ID
async function updateMovie(movieId, newTitle, newDirector, newYear) {
    const updatedMovie = { title: newTitle, director: newDirector, year: newYear };
    await fetch(`${firebaseUrl}/${movieId}.json`, {
        method: 'PUT',
        body: JSON.stringify(updatedMovie),
        headers: { 'Content-Type': 'application/json' }
    });
    console.log('Movie updated successfully!');
}

// Function to delete a movie by ID
async function deleteMovie(movieId) {
    await fetch(`${firebaseUrl}/${movieId}.json`, {
        method: 'DELETE'
    });
    console.log('Movie deleted successfully!');
}

// Example Usage in Console
async function demoMovies() {
    console.log("Adding new movies...");
    await addMovie('Inception', 'Christopher Nolan', 2010);
    await addMovie('The Matrix', 'The Wachowskis', 1999);

    console.log("\nListing all movies:");
    await listMovies();

    console.log("\nUpdating a movie...");
    await updateMovie('some-movie-id', 'Interstellar', 'Christopher Nolan', 2014);

    console.log("\nListing all movies after update:");
    await listMovies();

    console.log("\nDeleting a movie...");
    await deleteMovie('some-movie-id');

    console.log("\nFinal list of movies:");
    await listMovies();
}

demoMovies();
