const { Schema, model } = require('mongoose');

const moveSchema = new Schema({
    num: {
        type: Number,
        required: 'Id required',
    },
    name: {
      type: String,
      required: 'Name required',
      unique: true
    },
    alias: {
      type: String,
      required: 'Alias required',
      lowercase: true,
      unique: true
    },
    power: {
      type: Number,
      required: 'Power required'
    },
    accuracy: {
      type: Number,
      required: 'Accuracy required'
    },
    type: {
      type: Schema.Types.ObjectId,
      ref: "Type",
      required: 'Type required'
    },
    target: {
      type: String,
      required: 'Target required'
    }
});

module.exports = model('Move', moveSchema);
