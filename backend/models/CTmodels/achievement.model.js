const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const achievementSchema = new Schema({
    // username: {type: String, required: true},
    person: {type: String,required: true},
    sname: {type: String, required: true},
    dept: {type: String, required: true},
    institute: {type: String, required: true},
    ename: {type: String, required: true},
    date: {type: String,required: true}
    
});

const Achievement = mongoose.model('TYAchievement', achievementSchema);

module.exports = Achievement;