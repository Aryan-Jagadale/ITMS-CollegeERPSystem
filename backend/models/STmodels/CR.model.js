const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studymaterialSchema = new Schema({
    person: {type: String,required: true},
    name: {type: String,required: true},
    year: {type: String, required: true},
    link: {type: String, required: true},
    
});

const Studymaterial = mongoose.model('ST-CR', studymaterialSchema);

module.exports = Studymaterial;