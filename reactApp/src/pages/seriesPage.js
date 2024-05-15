import { useQuery } from 'react-query';
import { getSeries } from "../api/movies-api";

const SeriesPage = () => {
    const { data, error, isLoading, isError } = useQuery('series', getSeries)
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const series = data.results; 

    const seriesDisplay = (
        <div>
            {series && series.map(series => { return <li key={series.id}>{series.id}, {series.title}<br /></li> })}
        </div>
    )
    return <div><h2>TV Shows</h2>{seriesDisplay}</div>
}

export default SeriesPage;