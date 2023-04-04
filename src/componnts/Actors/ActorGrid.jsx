import ActorCard from "./ActorCard";

const ActorGrid = ({actors}) =>{
    return (
        <div>
        {actors.map(data => {
          <ActorCard
          key = {data.show.id} 
          name= {data.show.name} 
          country = {data.person.country ? data.person.country.name : null}
          birthday= {data.person.birthday}
          deathday = {data.person.deathday}
          gender = {data.person.gender}
          image = {data.person.image ? data.person.image.medium 
            : '/public/image-not-found.png'}
          />
        })}
      </div>
    )
}

export default ActorGrid ;