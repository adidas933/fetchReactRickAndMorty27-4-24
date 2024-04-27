import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Characters } from './components/Characters/Characters';
import { CharacterDetails } from './components/Characters/CharacterDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Characters />} />
          <Route path='/characters/:id' element={<CharacterDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
