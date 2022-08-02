const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    date: { type: Date },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  { versionKey: false }
);

const EventSchema = mongoose.model('Events', DataSchema);

module.exports = EventSchema;
