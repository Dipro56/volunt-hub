const EventModel = require('../models/EventModel');

exports.CreateEvent = (req, res) => {
  let reqBody = req.body;

  console.log(reqBody);

  EventModel.create(reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: 'fail,', data: err });
    } else {
      res.status(200).json({ status: 'success,', data: data });
    }
  });
};
