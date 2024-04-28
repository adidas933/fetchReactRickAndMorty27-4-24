import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CharactersDataAPI } from './CharactersDataAPI';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export const CharacterDetails = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    CharactersDataAPI()
      .then(setCharacters)
      // The same as:
      // .then((characters) => setCharacters(characters))
      .catch((error) => console.log(error));
  }, []);

  const { id } = useParams();
  const character = characters.find(
    (character: Character) => character.id === parseInt(id || '')
  );

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div>
      <div>{character.name}</div>
      <img src={character.image} alt={character.name} />
      <p>{character.gender}</p>
      <p>{character.species}</p>
      <p>{character.status}</p>
      <Link to='/'>Back to list of characters</Link>
    </div>
  );
};
