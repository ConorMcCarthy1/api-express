import React from 'react';
import { useQuery } from 'react-query';
import { getMovies, getSeries, getCelebs } from "./api/movies-api"; 


export const PublicPage = () => {
    return <h2>Public page</h2>
 }
 export const Movies = () => {
    const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)
    if (isLoading) {
        return <h1>Loading...</h1>
      }
    
      if (isError) {
        return <h1>{error.message}</h1>
      }  
      const movies = data.results;
      const moviesDisplay = (
        <div>
            {movies.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
        </div>
    )
       return <div><h2>Movies</h2>{moviesDisplay}</div>
              
 } 

 export const Series = () => {
  const {  data, error, isLoading, isError }  = useQuery('series', getSeries)
  if (isLoading) {
      return <h1>Loading...</h1>
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  
    const shows = data;
    const seriesDisplay = (
      <div>
          {shows.map(series => { return <>{series.series_id},{series.name}<br /></> })}
      </div>
  )
     return <div><h2>Series</h2>{seriesDisplay}</div>
}  

export const Celebs = () => {
  const {  data, error, isLoading, isError }  = useQuery('celebs', getCelebs)
  if (isLoading) {
      return <h1>Loading...</h1>
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  
    const people = data.results;
    const celebsDisplay = (
      <div>
          {people.map(credit => { return <>{credit.id}, {credit.name}<br /></> })}
      </div>
  )
     return <div><h2>Celebrities</h2>{celebsDisplay}</div>
} 

 export const Profile = () => {
    return <h2>My Profile </h2>

}
 export const HomePage = () => {
     return  <h2>Home page</h2>
 }