# poke-app
Pokemon fighting app being built with Node and React

The App will let you browse all the existing pokemons, see their moves and let you capture them.
Users will then be able to create a fighting room and fight (turn-based) with their respective pokemons using MQTT over WebSockets.
Fighters will be able to chat during the fight.

Cookies will be set to remember how many fights an user has played out

Pokemon data is acquired thanks to https://github.com/veekun/pokedex

PS: Mam nadzieje, ze wszystko uda sie zrobic tak jak napisalem :)

Planuje stworzyc role Admina oraz dodac TLS do przesylania danych dla jego logowania. Chcialbym, zeby zwykly user nie musial sie logowac, a jego dane (nick i zachowane pokemony) przechowywane byly w ciasteczkach.
najwiekszym problemem będzie odpowiednie ustawienie pokoi oraz topicow dla czatu oraz wykonanych atakow
Planuje ustawic to w taki sposob :
pokojWalki/
pokojWalki/chat (wiadomosci)
pokojWalki/atak (i tutaj przesle JSON w stringify zawierajacy nazwe oraz wartosc dla ataku)
Ale zobaczymy jak wyjdzie
