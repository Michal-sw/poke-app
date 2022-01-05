import './App.css';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import PokemonList from './ui/pokemons/PokemonList';
import Navbar from './ui/components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/' component={ PokemonList } exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
