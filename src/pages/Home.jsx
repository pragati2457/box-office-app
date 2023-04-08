import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchForShows, searchForPeople} from './../API/tvmaze';
import SearchForm from '../componnts/SearchForm';
import ShowGrid from '../componnts/Shows/ShowGrid';
import ActorGrid from '../componnts/Actors/ActorGrid';

const Home = () => {

  const [filter, setFilter] = useState(null);

  const {data: apiData, error: apiDataError} = useQuery({
    queryKey : ['search', filter],
    queryFn: () => 
    filter.searchOption ==='shows'
    ? searchForShows(filter.q)
    : searchForPeople(filter.q),
    enabled: !!filter,
  });
  

  const onSearch = async ({q, searchOption}) => {
    setFilter({q, searchOption});
  }
    


  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }
    if (apiData?.length === 0){
        return <div>No Results</div>;
    }

    if (apiData) {
        return apiData[0].show ? (<ShowGrid shows = {apiData}/>)
         : (<ActorGrid actors = {apiData}/>);
    }
    return null;
  };

  return (
    <div>
        <SearchForm onSearch = {onSearch}/>

      <div> {renderApiData()}</div>
    </div>
  );
};

export default Home;
