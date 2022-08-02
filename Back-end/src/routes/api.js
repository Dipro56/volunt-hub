const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('home');
});

router.get('/hello', (req, res) => {
  res.send('hello');
});

module.exports = router;
