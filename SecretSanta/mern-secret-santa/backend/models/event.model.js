const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  owner: { type: String, required: true },
  venue: { type: String, required: true },
  date: { type: Date, required: true },
  guests: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, {
  timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;