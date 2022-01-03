const express = require('express');
const router = express.Router({ mergeParams: true });

const Type = require('../models/Type');

router.get('/', async (req, res) => {
  await Type.find()
  .then(result => console.log(result))

  await Type.find()
  .then(result => res.json(result))
  .catch(err => res.status(500).json(err));
});

module.exports = router;