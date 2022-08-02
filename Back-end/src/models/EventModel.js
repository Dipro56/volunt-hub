const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    date: { type: Date },
  },
  { versionKey: false }
);

const EventSchema = mongoose.model('Events', DataSchema);

module.exports = EventSchema;
