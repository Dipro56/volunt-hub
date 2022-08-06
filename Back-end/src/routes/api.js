const express = require('express');
const EventController = require('../controllers/EventController');
const ParticipantController = require('../controllers/ParticipantController');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('home');
});

//event routes
router.get('/EventDetails', EventController.EeventDetails);
router.post('/CreateEvent', EventController.CreateEvent);
router.post('/DeleteEvent', EventController.DeleteEventByID);

//participant route
router.post('/Participant', ParticipantController.CreateParticipant);
router.get('/Participant', ParticipantController.ParticipantList);
router.post('/DeleteParticipant', ParticipantController.DeleteParticipantID);

module.exports = router;
