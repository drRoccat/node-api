const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    capacity: {type: Number, required: true }
});

module.exports = model('Category', schema);
