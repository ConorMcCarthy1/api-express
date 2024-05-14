import { useQuery } from 'react-query';
import { getCelebs } from "../api/movies-api";

const PeoplePage = () => {
    const { data, error, isLoading, isError } = useQuery('celebs', getCelebs)
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const people = data.results;
    const celebsDisplay = (
        <div>
            {people.map(credit => { return <li key={credit.id}>{credit.id}, {credit.name}<br /></li> })}
        </div>
    )
    return <div><h2>Celebrities</h2>{celebsDisplay}</div>
}

export default PeoplePage;