import ShowCard from "./ShowCard";
import { useStarredShows } from "../../lib/useStarredShows";

const ShowGrid = ({ shows }) => {

 const [starredShows, dispatchStarred]= useStarredShows()

  const onStarMeClick = showwId => {
    const isStarred = starredShows.includes(showwId);

    if(isStarred){
      dispatchStarred({ type: 'UNSTAR', showwId});
    } else {
      dispatchStarred({ type: 'STAR', showwId});
    }
  }

  return (
    <div>
      {shows.map(data => {
        
          <ShowCard
            key={data.show.id}
            id={data.show.id}
            name={data.show.name}
            image={
              data.show.image
                ? data.show.image.medium
                : '/image-not-found.png'
            }
            summary={data.show.summary}
            onStarMeClick={onStarMeClick}
            isStarred={starredShows.includes(data.show.id)}
          />
       
      })}
    </div>
  );
};

export default ShowGrid;