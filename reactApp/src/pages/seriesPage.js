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
    const shows = data;
    const seriesDisplay = (
        <div>
            {shows.map(series => { return <li key={series.series_id}>{series.series_id},{series.title}<br /></li> })}
        </div>
    )
    return <div><h2>TV Shows</h2>{seriesDisplay}</div>
}

export default SeriesPage;