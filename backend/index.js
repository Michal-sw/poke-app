const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const mongoose = require('mongoose');
const pokemons = require('./routes/pokemons');
const moves = require('./routes/moves');
const types = require('./routes/types');
const fights = require('./routes/fights');
const login = require('./routes/login')

const corsOptions = {
  origin: 'https://localhost:3000',
  optionsSuccessStatus: 200
}
const sslOptions = {
  key: fs.readFileSync('.cert/klucz_TLS_no_passphrase.key'),
  cert: fs.readFileSync('.cert/tls_certificate.crt')
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use('/pokemons', pokemons);
app.use('/moves', moves);
app.use('/types', types);
app.use('/fights', fights);
app.use('/login', login);

require('dotenv').config();
const dbConnData = {
  host: process.env.MONGO_HOST || '127.0.0.1',
  port: process.env.MONGO_PORT || 27017,
  user: process.env.MONGO_USER || 'user',
  database: process.env.MONGO_DATABASE || 'pokedex',
  password: process.env.MONGO_PASSWORD || 'password'
};

const mongoAtlas = `mongodb+srv://${dbConnData.user}:${dbConnData.password}@mycluster.jn27w6m.mongodb.net/${dbConnData.database}`;
const mongoLocal = `mongodb://${dbConnData.host}:${dbConnData.port}/${dbConnData.database}`;

const mongoUrl = process.env.PRODUCTION
  ? mongoAtlas
  : mongoLocal;

mongoose
    .connect(mongoUrl)
    .then(response => {
        console.log(`Connected to MongoDB. Database name: "${response.connections[0].name}"`)
        const apiPort = process.env.PORT || 3001
        const apiHost = process.env.API_HOST || 'localhost';
        https
          .createServer(sslOptions, app)
          .listen(apiPort, () => {
            console.log(`API server available from: https://${apiHost}:${apiPort}`);
          })
    })
    .catch(error => console.error('Error connecting to MongoDB', error));
