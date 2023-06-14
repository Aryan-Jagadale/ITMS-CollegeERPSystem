const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    // username: {type: String, required: true},
    person: {type: String,required: true},
    date: {type: String,required: true},
    activity: {type: String, required: true},
    subject: {type: String, required: true},
    group: {type: Number, required: true}
    
});

const Exercise = mongoose.model('GhodeExercise', exerciseSchema);

module.exports = Exercise;