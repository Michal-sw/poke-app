const express = require('express');
const router = express.Router({mergeParams: true});
const { authorizeMiddleware } = require('../middleware/middlewares');

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
  const isFight = req.query.isFight;

  const match = { $match: { alias: name } };

  const lookup = { 
    $lookup: {
      from: 'moves',
      localField: 'moves',
      foreignField: '_id',
      as: 'moves'
  }};

  const project = { 
    $project: isFight
      ? {
        _id: 1, num: 1, name: 1, alias: 1, types: 1, stats: 1, abilities: 1,
        moves: { $slice: [ "$moves", 4 ] }
      }
      : { moves: 1, _id: false }
  };

  Pokemon
    .aggregate([
      match,
      lookup,
      project
    ])
    .then(result => {
      if (result.length) {
        isFight
          ? res.json(result[0])
          : res.json({ pokemon: name, moves: result[0].moves })
      } else {
        res.sendStatus(404)
      }
    })
    .catch(err => res.status(500).json(err));
})


router.put('/:name/edit', authorizeMiddleware, async (req, res) => {
  try {
    const name = req.params.name;
    const pokemonObject = req.body;

    Pokemon.findOneAndUpdate({ alias: name }, pokemonObject, { new: true })
      .then(pokemon => {
        if ( pokemon !== null) {
          return res.json(pokemon)
        } else {
          return res.status(404).json({ error: 'Pokemon not found' })
        }
      })
      .catch(err => res.status(500).json(err))
  } catch {
      res.sendStatus(400)
    }
});

router.delete('/:name', authorizeMiddleware, async (req, res) => {
  const name = req.params.name;
  
  Pokemon.findOneAndDelete({ alias: name })
  .then(pokemon => {
    if ( pokemon !== null) {
      return res.json(pokemon)
    } else {
      return res.sendStatus(404).json({ error: 'Pokemon not found' })
    }
  })
  .catch(err => res.status(500).json(err))
});

router.post('/', async (req, res) => {
  try {
    // + 3 poniewaz niektore move'y posiadaja kilka wersji o tym samym pokedex id (np. 237)
    const newNum = await Pokemon.count();
    const newPokemon = { 
      num: newNum,
      types: req.body.types.map(type => Types.ObjectId(type)),
      moves: req.body.moves.map(move => Types.ObjectId(move)),
      ...req.body 
    };

    new Pokemon(newPokemon)
      .save()
      .then((pokemon) => {
        return res.json(pokemon)
      })
      .catch(err => res.status(500).json(err))
  } catch {
    res.sendStatus(400)
  }
})

module.exports = router;
