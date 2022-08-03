const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    date: { type: String },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  { versionKey: false }
);

const EventSchema = mongoose.model('Events', DataSchema);

// const GetEventData = {
//   fetchData: function (callback) {
//     const query = {};
//     const eventData = EventSchema.find(query);
//     eventData.exec(function (err, data) {
//       if (err) throw err;
//       // else console.log(data);  //event data details
//       return callback(data);
//     });
//   },
// };

module.exports = {
  EventSchema,
};
