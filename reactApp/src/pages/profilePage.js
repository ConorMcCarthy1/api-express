import { useQuery } from 'react-query';
import { getTopRated } from "../api/movies-api";

const ProfilePage = () => { 
    const { data, error, isLoading, isError } = useQuery('topRated', getTopRated)
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const topMovies = data.results;
    const topMoviesDisplay = (
        <div>
            {topMovies.map(movie => { return <li key={movie.id}>{movie.id}, {movie.title}<br /></li> })}
        </div>
    )
    return <div><h2>My Profile:</h2> <h3>Here you can be unique, just like everybody else is.</h3> 
    <br /> 
    <h3>Recommendations for you(and only you.)</h3>{topMoviesDisplay}
     </div>
}
    

export default ProfilePage;