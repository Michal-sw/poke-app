const express = require('express');
const router = express.Router({mergeParams: true});
const { databasePath } = require('../config/SQLite')
const sqlite3 = require('sqlite3');

router.get('/', async (req, res) => {
  const page = req.query.page

  if (page > 29) {
    res.redirect('pokemons/29')
  } else {

    const offset =  page >= 2 ? (page - 1) * 30 : 0

    let db = new sqlite3.Database(databasePath, sqlite3.OPEN_READONLY);
    const pStmt = db.all(
    `SELECT id, identifier
    FROM pokemon
    WHERE id > ${offset}
    LIMIT 30`, (err, rows) => {
      if (err) {
        res.send(err)
      } else {
        res.send(rows)
      }
    });

    db.close()  
  }
});

module.exports = router;
