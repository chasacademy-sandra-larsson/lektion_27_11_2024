
// Funktioner i frontend för att kunna körs Create, Read, Update, Delete mot vår resurs "movies" för vårt mock-API med JSON Server
// Vi använder inbyggda fetch(), men du kan använda acios om du vill! Men då behöves Vite eller annan module bundler.

// GET    /movies
// GET    /movies/:id
// POST   /movies
// PUT    /movies/:id
// PATCH  /movies/:id hoppar denna
// DELETE /movies/:id

// CREATE
async function createMovies(title, rating) {
    try {
        const response = await fetch("http://localhost:3000/movies", {
            method: 'POST',
            body: JSON.stringify({
                title: title, 
                rating: rating
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const movies = await response.json();
        return movies;

    } catch(error) {
        console.error(error);
    }
}

//createMovies("Avengers", "4.0");
//createMovies("Star wars", "5.0");


// READ MANY
async function getMovies() {
    try {
        const response = await fetch("http://localhost:3000/movies", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const movies = await response.json();
        console.log(movies);
        return movies;

    } catch(error) {
        console.error(error);
    }
}

getMovies();

// READ ONE
async function getMovieById(id) {
    try {
        const response = await fetch(`http://localhost:3000/movies/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const movie = await response.json();
        console.log(movie);
        return movie;

    } catch(error) {
        console.error(error);
    }
}

getMovieById(5);


// UPDATE 
async function updateMovieById(id, title, rating) {
    try {
        const response = await fetch(`http://localhost:3000/movies/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: title, 
                rating: rating
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const movie = await response.json();
        console.log(movie);
        return movie;

    } catch(error) {
        console.error(error);
    }
}

//updateMovieById(5, "Spider Man 2", "5.0");
//getMovies();

// DELETE 
async function deleteMovieById(id) {
    try {
        const response = await fetch(`http://localhost:3000/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const movie = await response.json();
        console.log(movie);
        return movie;

    } catch(error) {
        console.error(error);
    }
}

deleteMovieById(5);
getMovies();