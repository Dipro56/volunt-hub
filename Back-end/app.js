//basic import
const express = require('express');
const router = require('./src/routes/api');
require('dotenv').config();

const app = new express();
const bodyParser = require('body-parser');

//security middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

//database import
const mongoose = require('mongoose');
const multer = require('multer');

//security middleware implement

app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

//body parser
app.use(bodyParser.json());

//rate limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000 });
app.use(limiter);

const URI = 'mongodb://127.0.0.1:27017/VoluntHub';
const OPTION = { user: '', pass: '' };

mongoose.connect(URI, OPTION, (err) => {
  if (err) console.log(err);
  else console.log('Database successfully connected');
});

//router implement
app.use(router);

//undefiend route
app.use('*', (req, res) => {
  res.status(404).json({ status: 'fail', data: 'Not Found' });
});

module.exports = app;
