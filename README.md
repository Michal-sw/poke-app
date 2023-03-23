# Poke-app
```markdown
Pokemon App that lets the user browse all existing pokemons, see their moves and play out fights with other users.
Users are able to create a fighting room and fight (turn-based) with their respective pokemons using MQTT over WebSockets.
Fighters are able to chat during the fight.
Admin access for editing and deleting data
```
## *** IF YOU DO NOT SEE ANY DATA ON THE WEBSITE *** 
Please go to [API ENDPOINT](https://130.61.177.18:3000/) and mark the certificate as trusted
## [LIVE DEMO](https://poke-app-michal-sw.vercel.app/pokemons) (remember to mark API endpoint as trusted)
```markdown
to access fight screen select a pokemon in /pokemons section, scroll down and click 
"Select for fight"
```
## Technologies ##
```markdown
  1. Frontend:
    - React functional components
    - Redux for state managment
    - Redux-api-middleware for handling API calls
    - styled-components to make it look good (and style easily)

  2. Rest API:
    - Node.js
    - Express
    - MongoDB (mongoose for communication)

  3. MQTT:
    - mqtt.js

  4. Deployment: 
    - RHEL 7 run on Microsoft Azure services
    - NGINX
```
- [Node](/backend/)
- [React](/frontend/src)
- [Redux](/frontend/src/ducks)
- [MQTT](/frontend/src/middlewares/mqttHandler.js)
- [Styles](/frontend/src/ui/styles)
## Principles ##
```markdown
  - Clean Code
  - Ducks
  - DRY / reusability approach
```
## Resources ##
```markdown
Pokemon data as well as a bunch of assets are aquired thanks to:
  - https://itsjavi.com/pokemon-assets : All Backend data, modified and tailored to fit the page purposes by me + Pokemon logos and type logos
  - PokeAPI - Pokemon sprites and animations
  - https://github.com/msikma/pokesprite : Small Pokemon Logos
```
