const { Schema, model } = require('mongoose');

const abilitySchema = new Schema({
    num: {
        type: Number,
        required: 'Id required',
        unique: true
    },
    name: {
      type: String,
      required: 'Name required',
      unique: true
    }
});

module.exports = model('Ability', abilitySchema);
