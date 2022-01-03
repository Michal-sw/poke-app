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
    immunes: [{
      type: String
    }],
    weaknesses: [{
      type: String
    }],
    strengths: [{
      type: String
    }]
});

module.exports = model('Type', typeSchema);
