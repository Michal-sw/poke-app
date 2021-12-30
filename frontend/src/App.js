import './App.css';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import PokemonList from './ui/pokemons/PokemonList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' component={ PokemonList } exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
