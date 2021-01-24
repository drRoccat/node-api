const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    value: {type: Number, required: true},
    currency: {type: String, required: true },
    userId: {type: String, required: true}
});

module.exports = model('Bill', schema);
