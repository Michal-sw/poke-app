const express = require('express');
const router = express.Router({mergeParams: true});

router.get('/', async (req, res) => {
  const session = driver.session();
  await session
    .run("MATCH (actors :Actor) return actors")
    .then(result => {
      console.log(result.records)
      const allRecords = result.records.map(record => record.get('actors'))
      res.json(allRecords)
    })
    .catch(err => res.send(err))
    .finally(() => session.close());
});


module.exports = router;
