const express = require('express');
const router = express.Router({mergeParams: true});
const jwt = require('jsonwebtoken');

const { admins } = require('../adminsData')

router.post('/', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (admins[username] === password) {
    const token = jwt.sign({ username }, 'S3CR3T');
    return res.json({ username, token })
  } else {
    return res.status(404).json({ error: 'Wrong username or password' })
  }
})

module.exports = router;
