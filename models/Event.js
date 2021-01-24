const {Schema, model, Types, ObjectID} = require('mongoose');
const ObjectId = require('mongodb').ObjectID;
const Category = require('../models/Category');
const Project = require('../models/Project');


const schema = new Schema({
    //_id: {type: Number, required: true},
    type: {type: String, required: true},
    amount: {type: Number, required: true },
    project: {type: ObjectId, ref: 'Project'},
    category: { type: ObjectId, ref: 'Category'},
    date: {type: Date, required: true },
    bill: {type: String, required : true},
    description: {type: String, required: true},
    userId: {type: String, required: true}
});

module.exports = model('Event', schema);
