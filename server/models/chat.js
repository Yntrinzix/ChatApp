const mongoose = require('mongoose');

const ChatModelSchema = new mongoose.Schema({
  name: String,
  message: String,
  date: Date
});

module.exports = mongoose.model('Chat', ChatModelSchema);
