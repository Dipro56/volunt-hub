const express = require('express');
const EventCntroller = require('../controllers/EventController');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('home');
});

router.get('/hello', (req, res) => {
  res.send('hello');
});

router.post('/CreateEvent', EventCntroller.CreateEvent);

module.exports = router;
