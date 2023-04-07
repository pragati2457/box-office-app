import ShowCard from "./ShowCard";

const ShowGrid = ({ shows }) => {
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
          />
        );
      })}
    </div>
  );
};

export default ShowGrid;