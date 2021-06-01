const express = require('express');
const router = express.Router();

let twits = require('./twitData.json');

router.get('/', (req, res) => {
    res.render('index', {
      twits: twits,
    });
});

router.get('/twits/:id', (req, res) => {
  const id = req.params.id;

  if (id >= 0 && id < twits.length) {
    res.render('view', twits[id]);
  } else {
    res.render('404', {});
  }
});

module.exports = router;