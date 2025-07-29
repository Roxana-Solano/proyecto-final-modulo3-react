import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <>
      <li className="character-card">
        <Link className="a" to={`/character/${character.id}`}>
          <img
            src={
              character.image ||
              "https://placehold.co/210x295/1a1a1d/ccc?text=No+Image"
            }
            alt={character.name}
            width="150"
          />
          <h3>{character.name}</h3>
          <p> Specie:{character.species}</p>
        </Link>
      </li>
    </>
  );
}

export default CharacterCard;
