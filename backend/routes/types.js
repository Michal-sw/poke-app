const express = require('express');
const router = express.Router({ mergeParams: true });

const Type = require('../models/Type');

// EKSPORT DANYCH 
fs = require('fs');

router.get('/all', async(req, res) => {
  Type.find({})
    .then(result => {
      fs.writeFile('types.json', JSON.stringify(result), (err) => {
        if (err) return console.log(err);
        console.log('Eksported and saved');
      })
    })
      
  
})
//
 
router.get('/', async (req, res) => {
  await Type.find()
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
});

router.get('/:name', async (req, res) => {
  const name = req.params.name;
  const camelCaseName = name.charAt(0).toUpperCase() + name.slice(1);

  Type.findOne({ name: camelCaseName })
    .then(result => {
      if (result) {
        res.json(result)
      } else {
        res.sendStatus(404)
      }
    })
    .catch(err => res.status(500).json(err));
})
module.exports = router;