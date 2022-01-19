# poke-app
Pokemon App that will let the user browse all the existing pokemons, see their moves and perform fights with other users.
Users will then be able to create a fighting room and fight (turn-based) with their respective pokemons using MQTT over WebSockets.
Fighters will be able to chat during the fight.

Cookies will be set to remember how many fights an user has played out + his nickname and maybe captured pokemons
Admin control panel accessed by TLS login, normal users don't have to login, only their nicknames will be stored (I think)

Pokemon data as well as a bunch of assets are aquired thanks to:
  - https://itsjavi.com/pokemon-assets : All Backend data, modified to fit the page by me + Pokemon logos and type logos
  - PokeAPI - Big pokemon sprites
  - https://github.com/msikma/pokesprite : Small Pokemon Logos

Technologies: 
  Backend: 
    - Node.js
    - Express
    - MongoDB (mongoose for communication)
  Frontend:
    - React functional components
    - Redux for state managment
    - Redux-api-middleware for handling API calls
    - styled-components to make it look good (and style easily)
    
PS: Mam nadzieje, ze wszystko uda sie zrobic tak jak napisalem :)

najwiekszym problemem będzie odpowiednie ustawienie pokoi oraz topicow dla czatu oraz wykonanych atakow
Planuje ustawic to w taki sposob :
pokojWalki/
pokojWalki/chat (wiadomosci)
pokojWalki/atak (i tutaj przesle JSON w stringify zawierajacy nazwe oraz wartosc dla ataku)
Ale zobaczymy jak wyjdzie
