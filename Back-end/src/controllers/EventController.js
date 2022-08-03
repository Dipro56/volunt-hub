const EventModel = require('../models/EventModel');

exports.CreateEvent = (req, res) => {
  let eventBody = req.body;

  console.log(eventBody);

  EventModel.EventSchema.create(eventBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: 'fail,', data: err });
    } else {
      console.log(data);
      res.status(200).json({ status: 'success,', data: data });
    }
  });
};

exports.EeventDetails = (req, res) => {
  EventModel.GetEventData.fetchData((data) => {
    res.send(data);
  });
};
