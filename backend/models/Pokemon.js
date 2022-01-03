const { Schema, model } = require('mongoose');

const pokemonSchema = new Schema({
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
    alias: {
      type: String,
      required: 'Alias required',
      lowercase: true,
      unique: true
    },
    types: [{
      type: Schema.Types.ObjectId,
      ref: "Type"
    }],
    stats: {
      type: Map,
      of: Number
    },
    abilities: [{
      type: String
    }],
    moves: [{
      type: Schema.Types.ObjectId,
      ref: "Move"
    }]
});

module.exports = model('Pokemon', pokemonSchema);
