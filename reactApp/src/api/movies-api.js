export const getMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
}; 

export const getRecommendations = async (movie_id) => {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/movie_id/recommendations?api_key=58be30229db69dba9098c313200fdaee&language=en-US&page=1', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getSeries = async () => {
  const response = await fetch(
   'https://api.themoviedb.org/3/tv/series_id?api_key=58be30229db69dba9098c313200fdaee&language=en-US&page=1' 
    , {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    } 
  });
  return response.json();
}; 

export const getCelebs = async (fname, lname) => {
  const response = await fetch(
    'https://api.themoviedb.org/3/person/popular?api_key=58be30229db69dba9098c313200fdaee&language=en-US&page=1' 
    , {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }  
    } 
  )
  return response.json();
}; 

export const getTopRated = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/top_rated?api_key=58be30229db69dba9098c313200fdaee&language=en-US&page=1', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
}; 

  export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};
