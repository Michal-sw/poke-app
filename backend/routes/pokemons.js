const express = require('express');
const router = express.Router({mergeParams: true});
const { Types } = require('mongoose')

const Pokemon = require('../models/Pokemon');

router.get('/', async (req, res) => {
  const query = { };
  req.query.types ? query.types = { "$in": req.query.types.split(',').map(typeId => Types.ObjectId(typeId)) } : null;
  req.query.name ? query.alias = { "$regex": new RegExp(`^${req.query.name.toLowerCase()}`) } : null;

  const numOfRecords = await Pokemon.find(query).count();
  const limit = parseInt(req.query.limit) || 30;
  const maxPage = Math.ceil(numOfRecords/limit)

  const p = req.query.page;
  const page = p >= 2 && p <= maxPage ? p : 1;
  const offset = (page - 1) * limit

  if (req.query.name || req.query.types) {
    Pokemon
      .find(query)
      .sort({ num: 1 })
      .skip(offset)
      .limit(limit)
      .then(result => res.send({ pokemons: result, maxPage }))
      .catch(err => res.status(500).json(err));  
  } else {
    Pokemon
    .find({ num: {'$gt': offset} })
    .sort({ num: 1 })
    .limit(limit)
    .then(result => res.json({ pokemons: result, maxPage }))
    .catch(err => res.status(500).json(err));
  }
});

router.get('/:name', async (req, res) => {
  const name = req.params.name;

  Pokemon.find({ alias: name })
    .then(result => {
      if (result.length != 0) {
        res.json(result)
      } else {
        res.sendStatus(404)
      }
    })
    .catch(err => res.status(500).json(err));
})

module.exports = router;
