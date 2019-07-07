const mongoose = require('mongoose');
const {Schema} = mongoose;

const TargetsSchema = new Schema({
    email:String,
    responeded:{type:Boolean,default:false}
});

module.exports = TargetsSchema;

