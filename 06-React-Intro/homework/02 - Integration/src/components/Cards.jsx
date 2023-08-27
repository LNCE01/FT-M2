import Card from './Card';
import characters, { Rick } from '../data';

export default function Cards(props) {
   const mappedCharacters = characters.map((character, index) => {
      return (
        <Card
          key={index}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        />
      );
   });
   return(
      <div style={{display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
      {mappedCharacters}
      </div>
   )
}
