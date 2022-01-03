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

  Type.find({ name: camelCaseName })
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