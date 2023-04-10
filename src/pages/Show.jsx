import { useQuery } from '@tanstack/react-query';
import { Link, useParams} from 'react-router-dom';
import { getShowById } from '../API/tvmaze';
import Details from '../componnts/Shows/Details';
import ShowMainData from '../componnts/Shows/ShowMainData';
import Seasons from '../componnts/Shows/Seasons';
import Cast from '../componnts/Shows/Cast';



const Show = () => {
    const {showId} = useParams();
    const {data: showData, error: showError} = useQuery({
      queryKey: ['show', showId],
      queryFn: () => getShowById(showId),
      refetchOnWindowFocus : false,
    });
  

    if(showError){
      return <div>We have an Error: {showError.message}</div>
    }
    if (showData){
      return( 
      <div>
        <Link to ="/">Go Back to Home</Link>
        <ShowMainData
          image = {showData.image}
          name = {showData.name}
          rating = {showData.rating}
          summary = {showData.summary}
          genres = {showData.genres}
        />

        <div>
          <h2>Details</h2>
          <Details
            status = { showData.status}
            premiered =  {showData.premiered}
            network = { showData.network}
          />
        </div>

        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>

        <div>
          <h2>Cast</h2>
          <Cast cast = {showData._embedded.cast} />
        </div>
        </div>
      );
    }
    return <div>Data is loading</div>;
  };
  
  export default Show;