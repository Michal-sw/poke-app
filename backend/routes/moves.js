const express = require('express');
const router = express.Router({ mergeParams: true });
const { Types } = require('mongoose');

const Move = require('../models/Move');
const Pokemon = require('../models/Pokemon');

router.get('/', async (req, res) => {
  const query = { };
  const sort = { };
  req.query.types ? query.type = { "$in": req.query.types.split(',').map(typeId => Types.ObjectId(typeId)) } : null;
  req.query.name ? req.query.name = req.query.name.replace(/[^A-Z0-9]+/ig, "") : null;
  req.query.name ? query.alias = { "$regex": new RegExp(`^${req.query.name.toLowerCase()}`) } : null;
  req.query.power ? query.power = { "$gte": req.query.power } : null;

  switch (req.query.sort) {
    case 'name': sort.name = 1; break;
    case 'named': sort.name = -1; break;
    case 'id': sort.num = 1; break;
    case 'idd': sort.num = -1; break;
    case 'power': sort.power = 1; break;
    case 'powerd': sort.power = -1; break;
    default: sort.num = 1;
  }
  
  const numOfRecords = await Move.find(query).count();
  const limit = parseInt(req.query.limit) || 60;
  const maxPage = Math.ceil(numOfRecords/limit)

  const p = req.query.page;
  const page = p >= 2 && p <= maxPage ? p : 1;
  const offset = (page - 1) * limit

  if (req.query.name || req.query.types || sort.name || req.query.power) {
    Move
      .find(query)
      .sort(sort)
      .skip(offset)
      .limit(limit)
      .then(result => res.json({ moves: result, maxPage, limit, numOfRecords }))
      .catch(err => res.status(500).json(err));  
  } else {
    Move
      .find({ num: sort.num === -1 ? {'$lt': numOfRecords - offset} : {'$gt': offset} })
      .sort(sort)
      .limit(limit)
      .then(result => res.json({ moves: result, maxPage, limit, numOfRecords }))
      .catch(err => res.status(500).json(err));
  }

});

router.get('/:name', async (req, res) => {
  const name = req.params.name;
  Move
    .findOne({ alias: name })
    .then(result => {
      if (result) {
        res.json(result)
      } else {
        res.sendStatus(404)
      }
    })
    .catch(err => res.status(500).json(err));
})

router.get('/:name/pokemons', async (req, res) => {
  const name = req.params.name;
  const moveId = await Move
    .findOne({ alias: name })
    .then(result => result)

  Pokemon.find({ moves: moveId })
    .then(result => {
      if (result.length != 0) {
        res.json({ move: name, pokemons: result })
      } else {
        res.sendStatus(404)
      }
    })
    .catch(err => res.status(500).json(err));
})



module.exports = router;