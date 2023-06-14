const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studymaterialSchema = new Schema({
    person: {type: String,required: true},
    date: {type: String,required: true},
    description: {type: String, required: true},
    link: {type: String, required: true},
    
});

const Studymaterial = mongoose.model('Studymaterial', studymaterialSchema);

module.exports = Studymaterial;