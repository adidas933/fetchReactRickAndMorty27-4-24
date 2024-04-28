import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Character } from './CharacterDetails';
import { CharactersDataAPI } from './CharactersDataAPI';

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    CharactersDataAPI()
      .then(setCharacters)
      // The same as:
      // .then((characters) => setCharacters(characters))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box sx={{ maxWidth: 360 }}>
      <nav>
        <List>
          {characters.map((character: Character) => (
            <div key={character.id}>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to={`/characters/${character.id}`}
                >
                  <ListItemText primary={character.name} />
                </ListItemButton>
              </ListItem>
              <Divider component='li' sx={{ backgroundColor: 'white' }} />
            </div>
          ))}
        </List>
      </nav>
    </Box>
  );
};
