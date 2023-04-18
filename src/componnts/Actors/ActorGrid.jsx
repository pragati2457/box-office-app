import { FlexGrid } from "../common/FlexGrid";
import ActorCard from "./ActorCard";

const ActorGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => {
        return (
          <ActorCard
            key={data.person.id}
            name={data.person.name}
            country={data.person.country ? data.person.country.name : null}
            birthday={data.person.birthday}
            deathday={data.person.deathday}
            gender={data.person.gender}
            image={
              data.person.image
                ? data.person.image.medium
                : '/image-not-found.png'
            }
          />
        );
      })}
    </FlexGrid>
  );
};

export default ActorGrid ;