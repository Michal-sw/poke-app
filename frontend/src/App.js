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
import MoveDetail from './ui/moves/MoveDetail';
import MoveForm from './ui/moves/MoveForm';
import PokemonForm from './ui/pokemons/PokemonForm';
import MqttTest from './ui/mqtt_test/MqttTest';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/pokemons' component={ PokemonMasterView } exact/>
          <Route path='/pokemons/add' component={ PokemonForm } exact/>

          <Route path='/pokemons/fight' component={ MqttTest } exact/>

          <Route path='/pokemons/:name' component={ PokemonDetail } exact/>
          <Route path='/pokemons/:name/edit' component={ PokemonForm } exact/>

          <Route path='/types' component={ TypeMasterView } exact/>
          <Route path='/types/:id' component={ TypeDetail } exact/>
          
          <Route path='/moves' component={ MoveMasterView } exact/>
          <Route path='/moves/add' component={ MoveForm } exact/>
          <Route path='/moves/:name' component={ MoveDetail } exact/>
          <Route path='/moves/:name/edit' component={ MoveForm } exact/>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
