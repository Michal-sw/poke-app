import './App.css';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Navbar from './ui/components/Navbar';
import PokemonDetail from './ui/pokemons/PokemonDetail';
import PokemonMasterView from './ui/pokemons/PokemonMasterView';
import TypeMasterView from './ui/types/TypeMasterView';
import TypeDetail from './ui/types/TypeDetail';
import MoveMasterView from './ui/moves/MoveMasterView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/pokemons' component={ PokemonMasterView } exact/>
          <Route path='/pokemons/:name' component={ PokemonDetail } exact/>
          <Route path='/types' component={ TypeMasterView } exact/>
          <Route path='/types/:id' component={ TypeDetail } exact/>
          <Route path='/moves' component={ MoveMasterView } exact/>
          {/* <Route path='/moves/:name' component={ MoveDetail } exact/> */}

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
