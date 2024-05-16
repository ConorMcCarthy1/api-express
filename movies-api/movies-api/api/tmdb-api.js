import fetch from 'node-fetch';

export const getUpcomingMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}; 

export const getGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  }; 

  export const getSeries = async () => {
    const response = await fetch(
      'http://localhost:8080/api/series'
    )
    return response.json();
  }; 
  
  export const getCelebs = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/person/popular?api_key=58be30229db69dba9098c313200fdaee&language=en-US&page=1' 
    )
    return response.json();
  };

   