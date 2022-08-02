const EventModel = require('../models/EventModel');

exports.CreateEvent = (req, res) => {
  let eventBody = req.body;
  let fileBody = req.file;
  // let fileBody = req.file;

  // console.log('file body', fileBody);

  console.log(eventBody);
  console.log(fileBody);

  EventModel.create(eventBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: 'fail,', data: err });
    } else {
      console.log(data);
      res.status(200).json({ status: 'success,', data: data });
    }
  });
};
