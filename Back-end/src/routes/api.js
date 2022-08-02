const express = require('express');
const EventCntroller = require('../controllers/EventController');
const router = express.Router();
const multer = require('multer');

router.get('/', (req, res) => {
  res.send('home');
});

router.get('/hello', (req, res) => {
  res.send('hello');
});

const UPLOAD_FOLDERS = './uploads/';
var upload = multer({ dest: UPLOAD_FOLDERS });

router.post('/CreateEvent', upload.single('file'), EventCntroller.CreateEvent);

module.exports = router;
