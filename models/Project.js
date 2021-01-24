const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    //id: {type: String, required: true},
    name: {type: String, required: true},
    earnings: {type: Number, required: true },
    consumption: {type: Number, required: true },
    profit: {type: Number, required: true },
    plannedProfit: {type: Number, required: true },
    relevance: {type: Number, required: true },
    currency: {type: String, required: true },
    active: {type: Boolean, required: false },
    userId: {type: String, required: true}
});

module.exports = model('Project', schema);
