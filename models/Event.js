const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    id: {type: Number, required: true},
    type: {type: String, required: true},
    amount: {type: Number, required: true },
    category: {type: Number, required: true},
    date: {type: String, required: true },
    description: {type: String, required: true}
});

module.exports = model('Event', schema);
