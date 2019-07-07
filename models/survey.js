const mongoose = require('mongoose');
const {Schema} = mongoose;
const TargetSchema = require('./targets');

const SurveySchema = new Schema({
    title:String,
    body:String,
    subject:String,
    targets:[TargetSchema],
    yes:{type:Number,default:0},
    no:{type:Number,default:0},
    _user:{type:Schema.Types.ObjectId,ref:'User'},
    dateSend:Date,
    lastRespond:Date
});

mongoose.model('surveys',SurveySchema);
