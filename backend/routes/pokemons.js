const express = require('express');
const router = express.Router({mergeParams: true});
const { Types } = require('mongoose')

const Pokemon = require('../models/Pokemon');

router.get('/', async (req, res) => {
  const query = { };
  const sort = { };
  req.query.types ? query.types = { "$in": req.query.types.split(',').map(typeId => Types.ObjectId(typeId)) } : null;
  req.query.name ? req.query.name = req.query.name.replace(/[^A-Z0-9]+/ig, "") : null;
  req.query.name ? query.alias = { "$regex": new RegExp(`^${req.query.name.toLowerCase()}`) } : null;

  switch (req.query.sort) {
    case 'name': sort.name = 1; break;
    case 'named': sort.name = -1; break;
    case 'id': sort.num = 1; break;
    case 'idd': sort.num = -1; break;
    default: sort.num = 1;
  }
  
  const numOfRecords = await Pokemon.find(query).count();
  const limit = parseInt(req.query.limit) || 30;
  const maxPage = Math.ceil(numOfRecords/limit)

  const p = req.query.page;
  const page = p >= 2 && p <= maxPage ? p : 1;
  const offset = (page - 1) * limit

  if (req.query.name || req.query.types || sort.name) {
    Pokemon
      .find(query)
      .sort(sort)
      .skip(offset)
      .limit(limit)
      .then(result => res.json({ pokemons: result, maxPage, limit, numOfRecords }))
      .catch(err => res.status(500).json(err));  
  } else {
    Pokemon
      .find({ num: sort.num === -1 ? {'$lt': numOfRecords - offset} : {'$gt': offset} })
      .sort(sort)
      .limit(limit)
      .then(result => res.json({ pokemons: result, maxPage, limit, numOfRecords }))
      .catch(err => res.status(500).json(err));
  }
});

router.get('/:name', async (req, res) => {
  const name = req.params.name;

  Pokemon.findOne({ alias: name })
    .then(result => {
      if (result) {
        res.json(result)
      } else {
        res.sendStatus(404)
      }
    })
    .catch(err => res.status(500).json(err));
})

router.get('/:name/moves', async (req, res) => {
  const name = req.params.name;

  Pokemon
    .aggregate([
      { $match: { alias: name } },
      { $lookup: {
          from: 'moves',
          localField: 'moves',
          foreignField: '_id',
          as: 'moves'
      }},
      { $project: {
        moves: 1,
        _id: false
      }}
    ])
    .then(result => {
      if (result.length) {
        res.json({ pokemon: name, moves: result[0].moves })
      } else {
        res.sendStatus(404)
      }
    })
    .catch(err => res.status(500).json(err));
})

module.exports = router;
