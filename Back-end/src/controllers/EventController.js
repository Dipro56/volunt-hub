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
  const query = {};
  EventModel.EventSchema.find(query, (err, data) => {
    if (err) {
      res.status(400).json({ status: 'fail,', data: err });
    } else {
      // next line shows all event data
      // console.log(data);
      // res.status(200).json({ status: 'success,', data: data });
      res.send(data);
    }
  });
  // EventModel.GetEventData.fetchData((data) => {
  //   res.send(data);
  // });
};

exports.DeleteEventByID = (req, res) => {
  const id = req.body._id;
  console.log('req body', id);

  EventModel.EventSchema.deleteOne({ _id: id }, (err, data) => {
    console.log('Schema delete', id);
    if (err) {
      res.status(400).json({ status: 'fail,', data: err });
    } else {
      console.log(data);
      res.status(200).json({ status: 'success,', data: data });
    }
  });
  //console.log(id);
  // EventModel.DeleteEvent.delete((data) => {
  //   res.send(data);
  // });
  // EventModel.DeleteEvent.delete(id);
  // res.send(`ID to be deleted: ${_id}`);
};
