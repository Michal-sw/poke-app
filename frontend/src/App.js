import './App.css';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Navbar from './ui/components/Navbar';
import PokemonDetail from './ui/pokemons/PokemonDetail';
import PokemonMasterView from './ui/pokemons/PokemonMasterView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/pokemons' component={ PokemonMasterView } exact/>
          <Route path='/pokemons/:name' component={ PokemonDetail } exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
