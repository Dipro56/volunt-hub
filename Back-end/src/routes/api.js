const express = require('express');
const EventController = require('../controllers/EventController');
const ParticipantController = require('../controllers/ParticipantController');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('home');
});

router.get('/EventDetails', EventController.EeventDetails);

router.post('/CreateEvent', EventController.CreateEvent);

router.post('/DeleteEvent', EventController.DeleteEventByID);

router.post('/Participant', ParticipantController.CreateParticipant);

router.get('/Participant', ParticipantController.ParticipantList);

module.exports = router;
