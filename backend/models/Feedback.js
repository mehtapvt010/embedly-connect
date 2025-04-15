const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  clientId: { type: String, required: true },
  name: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
