import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PokemonDetails from './components/Details/pokemonDetails';
import PokemonList from './components/List/pokemonList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/:id" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
