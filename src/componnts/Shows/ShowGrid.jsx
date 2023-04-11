import { useEffect, useReducer } from "react";
import ShowCard from "./ShowCard";

const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [ state, dispatch] = useReducer(reducer, initialState, initial => {
   const persistedValue = localStorage.getItem(localStorageKey);

    return persistedValue ? JSON.parse(persistedValue) : initial;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]
  );

  return [state, dispatch]
}

const starredShowsReducer = (currentStarred, action) => {

  switch (action.type) {
    case 'STAR':
      return currentStarred.concat(action.showId);
    case 'UNSTAR' :
      return currentStarred.filter(showId => showId !== action.showId);
    default:
      return currentStarred;    
  }
}

const ShowGrid = ({ shows }) => {

  const [starredShows, dispatchStarred] =  usePersistedReducer(starredShowsReducer, [], 'starredShows');

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
        return (
          <ShowCard
            key={data.show.id}
            id={data.show.id}
            name={data.show.name}
            image={
              data.show.image
                ? data.show.image.medium
                : '/public/image-not-found.png'
            }
            summary={data.show.summary}
            onStarMeClick={onStarMeClick}
          />
        );
      })}
    </div>
  );
};

export default ShowGrid;