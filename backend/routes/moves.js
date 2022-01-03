const express = require('express');
const router = express.Router({ mergeParams: true });

const Move = require('../models/Move');

router.get('/', async (req, res) => {
  await Move.find()
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
});

router.get('/:name', async (req, res) => {
  const name = req.params.name;

  Move.find({ alias: name })
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