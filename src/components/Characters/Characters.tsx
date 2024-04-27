import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Card,
} from '@mui/material';
import characters from '../Data/Data.json';
import { Link } from 'react-router-dom';

export const Characters = () => {
  return (
    <Box sx={{ maxWidth: 360 }}>
      <nav>
        <List>
          {characters.map((character) => (
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
      <Card/>
    </Box>
  );
};
