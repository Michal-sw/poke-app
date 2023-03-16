const { Schema, model } = require('mongoose');

const typeSchema = new Schema({
    num: {
        type: Number,
        required: 'Id required',
        unique: true
    },
    name: {
      type: String,
      required: 'Name required',
      unique: true
    },
    color: {
      type: String,
      required: 'Color required'
    },
    immunes: [{
      type: Schema.Types.ObjectId,
      ref: "Type",
    }],
    weaknesses: [{
      type: Schema.Types.ObjectId,
      ref: "Type",
    }],
    strengths: [{
      type: Schema.Types.ObjectId,
      ref: "Type",
    }]
}, { collection: 'Type' });

module.exports = model('Type', typeSchema);
