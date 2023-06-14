const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ghodeleaveSchema = new Schema({
    person: {type: String,required: true},
    date: {type: String,required: true},
    fname: {type: String,required: true},
    lname: {type: String,required: true},
    designation: {type: String,required: true},
    NoDays: {type: Number, required: true},
    TypeDays: {type: String, required: true},
    email: {type: String,required: true},
    response: {type: String,required: true}

    
});

const Ghodeleave = mongoose.model('Ghodeleave', ghodeleaveSchema);

module.exports = Ghodeleave;