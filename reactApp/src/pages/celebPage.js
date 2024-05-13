//celebPage.js 

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
    const people = data;
    const celebsDisplay = (
        <div>
            {people?.map(credit => { return <li key={credit.person_id}>{credit.person_id},{credit.fname} {credit.lname}<br /></li> })}
        </div>
    )
    return <div><h2>Celebrities</h2>{celebsDisplay}</div>
}

export default PeoplePage;