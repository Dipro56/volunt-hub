const express = require('express');
const EventCntroller = require('../controllers/EventController');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('home');
});

router.get('/EventDetails', EventCntroller.EeventDetails);

router.post('/CreateEvent', EventCntroller.CreateEvent);

router.post('/DeleteEvent', EventCntroller.DeleteEventByID);

module.exports = router;
