const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
  {
    title: { type: String },
    name: { type: String },
    email: { type: String },
    mobileNo: { type: String },
    eventID: { type: String },
  },
  { versionKey: false }
);

const ParticipantSchema = mongoose.model('Participant', DataSchema);

module.exports = {
  ParticipantSchema,
};
