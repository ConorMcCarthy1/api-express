import React from 'react';
import { useQuery } from 'react-query';
import { getMovies, getSeries, getCelebs, getRecommendations, getTopRated } from "./api/movies-api"; 


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
    const series = data;
    const seriesDisplay = (
      <div>
          {series.map(series => { return <>{series.id}, {series.title}<br /></> })}
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
  const {  data, error, isLoading, isError }  = useQuery('topRated', getTopRated)
  if (isLoading) {
      return <h1>Loading...</h1>
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  
    const recommendations = data.results;
    const recommendationsDisplay = (
      <div>
          {recommendations.map(recommendation => { return <>{recommendation.movie_id}, {recommendation.title}<br /></> })}
      </div>
  )
    return <div><h2>My Profile:</h2> <h3>Here you can be unique, just like everybody else is.</h3> 
    <br /> 
    <h2>Recommendations for you(and only you.)</h2>{recommendationsDisplay}</div>

}
 export const HomePage = () => {
     return  <h2>Home page</h2>
 }