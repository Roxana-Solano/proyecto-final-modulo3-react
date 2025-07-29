import CharacterCard from "./CharacterCard";

function CharacterList({ characters = [] }) {
  if (characters.length === 0) {
    return <p className="mensaje">No hay núngun personaje.</p>;
  }
  return (
    <>
      <ul className="character-list">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    </>
  );
}

export default CharacterList;
