import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CharacterDetails } from '../Characters/CharacterDetails';
import { Characters } from '../Characters/Characters';

export const Layout = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Characters />} />
      <Route path='/characters/:id' element={<CharacterDetails />} />
    </Routes>
  </BrowserRouter>
);
