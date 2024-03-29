const ParticipantModel = require('../models/ParticipantModel');

exports.CreateParticipant = (req, res) => {
  let participant = req.body;

  console.log(participant);

  ParticipantModel.ParticipantSchema.create(participant, (err, data) => {
    if (err) {
      res.status(400).json({ status: 'fail,', data: err });
    } else {
      console.log(data);
      res.status(200).json({ status: 'success,', data: data });
    }
  });
};

exports.ParticipantList = (req, res) => {
  const query = {};
  ParticipantModel.ParticipantSchema.find(query, (err, data) => {
    if (err) {
      res.status(400).json({ status: 'fail,', data: err });
    } else {
      res.send(data);
    }
  });
};

exports.DeleteParticipantID = (req, res) => {
  const id = req.body.id;
  console.log('req body', id);

  ParticipantModel.ParticipantSchema.deleteOne({ _id: id }, (err, data) => {
    console.log('Schema delete', id);
    if (err) {
      res.status(400).json({ status: 'fail,', data: err });
    } else {
      console.log(data);
      res.status(200).json({ status: 'success,', data: data });
    }
  });
};
