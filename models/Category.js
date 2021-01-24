const {Schema, model, Types, ObjectID} = require('mongoose');

const schema = new Schema({
    //_id: {type: ObjectID, required: true},
    name: {type: String, required: true},
    income: {type: Number, required: true },
    outcome: {type: Number, required: true },
    projectId: {type: String, required: true },
    userId: {type: String, required: true}
});

module.exports = model('Category', schema);
