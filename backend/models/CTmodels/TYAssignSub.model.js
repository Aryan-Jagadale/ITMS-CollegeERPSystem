const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const assignlistSchema = new Schema({
    name: {type: String,required: true},
    email: {type: String,required: true},
    subject: {type: String, required: true},
    
});

const Assignlist = mongoose.model('TYAssignSubjects', assignlistSchema);

module.exports = Assignlist;