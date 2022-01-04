const express = require('express');
const router = express.Router({mergeParams: true});

const Pokemon = require('../models/Pokemon');

router.get('/', async (req, res) => {
  const numOfRecords = req.query.name ? await Pokemon.find({ name: { "$regex": new RegExp(req.query.name) } }).count() : await Pokemon.count();
  const limit = parseInt(req.query.limit) || 30;
  const p = req.query.page
  const page = p >= 2 && p <= Math.ceil(numOfRecords/limit) ? p : 1
  const offset = (page - 1) * limit

  if (req.query.name) {
    Pokemon
      .find({ num: {'$gt': offset}, alias: { "$regex": new RegExp(req.query.name.toLowerCase()) } })
      .sort({ num: 1 })
      .skip(offset)
      .limit(limit)
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));  
  } else {
    Pokemon
    .find({ num: {'$gt': offset} })
    .sort({ num: 1 })
    .limit(limit)
    .then(result => res.json(result))
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
