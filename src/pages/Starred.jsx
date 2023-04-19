import { useQuery } from "@tanstack/react-query";
import { getShowsByIds } from "../API/tvmaze";
import ShowGrid from "../componnts/Shows/ShowGrid";
import { useStarredShows } from "../lib/useStarredShows";
import {TextCenter} from '../componnts/common/TextCenter'

const Starred = () => {

  const [starredShowsIds] =  useStarredShows();

  const {data: starredShows, error: starredShowsError} = useQuery({
    queryKey : ['starred', starredShowsIds],
    queryFn:  () => getShowsByIds(starredShowsIds).then(result =>
      result.map(show => ({show}))),
      refetchOnWindowFocus: false,
  });

  if (starredShows?.length===0) {
    return <TextCenter> No shows were starred</TextCenter>
  }


  if (starredShows?.length > 0) {
    return < ShowGrid shows = {starredShows} />
  }

  if (starredShowsError) {
    return <TextCenter>Error occured: {starredShowsError.message}</TextCenter>
  }


  return <TextCenter>Shows are loading</TextCenter>;
};

export default Starred;
