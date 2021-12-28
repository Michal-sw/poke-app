const express = require('express');
const pokemons = require('./routes/pokemons');
const moves = require('./routes/moves');

const app = express();
app.use(express.json());

try {
  app.use('/pokemons', pokemons);
  app.use('/moves', moves);

  const port = 5000
  app.listen(port, () => {
    console.log(`API server listening at http://localhost:${port}`);
  })

} catch(ex) {
  console.error('Error connecting to SQLite', ex);
}

// db.each("SELECT type_id AS id FROM pokemon_types", function(err, row) {
//   console.log(row);
// })

// let db = new sqlite3.Database('/Users/michal/Downloads/pokemon/pokedex/pokedex/data/pokedex.sqlite', (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Connected to the chinook database.');
// });

