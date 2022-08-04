const express = require('express');
const EventCntroller = require('../controllers/EventController');
const router = express.Router();

//firebase
// const admin = require('firebase-admin');
// const functions = require('firebase-functions');

// admin.initializeApp();

// const auth = admin.auth();

// const getAllUsers = (req, res) => {
//   const maxResults = 1; // optional arg.

//   auth
//     .listUsers(maxResults)
//     .then((userRecords) => {
//       userRecords.users.forEach((user) => console.log(user.toJSON()));
//       res.end('Retrieved users list successfully.');
//     })
//     .catch((error) => console.log(error));
// };
// const api = functions.https.onRequest(getAllUsers);
// router.get(`http://localhost:5000/sweltering-fire-5301/us-central1/${api}`);

router.get('/', (req, res) => {
  res.send('home');
});

router.get('/EventDetails', EventCntroller.EeventDetails);

router.post('/CreateEvent', EventCntroller.CreateEvent);

router.post('/DeleteEvent', EventCntroller.DeleteEventByID);

module.exports = router;
