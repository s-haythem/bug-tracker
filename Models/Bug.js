const mongoose = require('mongoose');

const bugSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  affectedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  priority: {
    type: String,
    default: 'Normal',
  },
  status: {
    type: String,
    default: 'Open',
  },
});

module.exports = Bug = mongoose.model('Bug', bugSchema);
