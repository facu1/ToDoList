const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  state: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Item', ItemSchema);