import "./App.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import characters, { Rick } from "./data.js";

function App() {
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
  return (
    <div className="App">
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      <Cards characters={characters} />
      {mappedCharacters}
      {/* <Card
        id={Rick.id}
        name={Rick.name}
        status={Rick.status}
        species={Rick.species}
        gender={Rick.gender}
        origin={Rick.origin.name}
        image={Rick.image}
        onClose={() => window.alert("Emulamos que se cierra la card")}
      /> */}
    </div>
  );
}

export default App;
