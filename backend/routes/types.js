const express = require('express');
const router = express.Router({ mergeParams: true });

const Type = require('../models/Type');

router.get('/', async (req, res) => {
  await Type.find()
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
});

router.get('/:name', async (req, res) => {
  const name = req.params.name;
  const camelCaseName = name.charAt(0).toUpperCase() + name.slice(1);

  await Type.find({ name: camelCaseName })
    .then(result => {
      res.json(result)
    })
    .catch(err => res.status(500).json(err));
})
module.exports = router;