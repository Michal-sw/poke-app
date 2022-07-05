import './App.css';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloakConfig from './keycloak'

import Navbar from './ui/components/Navbar';
import PokemonDetail from './ui/pokemons/PokemonDetail';
import PokemonMasterView from './ui/pokemons/PokemonMasterView';
import TypeMasterView from './ui/types/TypeMasterView';
import TypeDetail from './ui/types/TypeDetail';
import MoveMasterView from './ui/moves/MoveMasterView';
import MoveDetail from './ui/moves/MoveDetail';
import MoveForm from './ui/moves/MoveForm';
import PokemonForm from './ui/pokemons/PokemonForm';
import FightMainView from './ui/mqtt_test/FightMainView';
import Login from './ui/components/Login';
import PageNotFound from './ui/components/PageNotFound';
import WelcomePage from './ui/components/WelcomePage';
import PrivateRoute from './ui/components/PrivateRoute';
import LoginInfo from './ui/components/LoginInfo';

function App() {
  return (
    <div className="App">
      <ReactKeycloakProvider authClient={keycloakConfig}>
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route path='/login' component={ Login } exact/>
            <Route path='/pokemons' component={ PokemonMasterView } exact/>
            <PrivateRoute path='/pokemons/add' component={ PokemonForm } exact/>

            <Route path='/pokemons/fight' component={ FightMainView } exact/>
            <Route path='/pokemons/:name' component={ PokemonDetail } exact/>
            <PrivateRoute path='/pokemons/:name/edit' component={ PokemonForm } exact/>

            <Route path='/types' component={ TypeMasterView } exact/>
            <Route path='/types/:id' component={ TypeDetail } exact/>
            
            <Route path='/moves' component={ MoveMasterView } exact/>
            <PrivateRoute path='/moves/add' component={ MoveForm } exact/>
            <Route path='/moves/:name' component={ MoveDetail } exact/>
            <PrivateRoute path='/moves/:name/edit' component={ MoveForm } exact/>
            <Route path='/' component={ WelcomePage } exact/>
            <Route path='*' component={ PageNotFound } exact/>

          </Switch>
          <LoginInfo/>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
