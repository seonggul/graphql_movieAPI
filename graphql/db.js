let movies = [
  { id: 0, name: "wolf", score: 2 },
  { id: 1, name: "star wars", score: 7 },
  { id: 2, name: "im alive", score: 5 },
  { id: 3, name: "tenet", score: 9 },
  { id: 4, name: "ring", score: 6 },
];

export const getMovie = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
