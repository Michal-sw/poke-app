import './App.css';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import PokemonList from './ui/pokemons/PokemonList';
import Navbar from './ui/components/Navbar';
import PokemonDetail from './ui/pokemons/PokemonDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/pokemons' component={ PokemonList } exact/>
          <Route path='/pokemons/:name' component={ PokemonDetail } exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
