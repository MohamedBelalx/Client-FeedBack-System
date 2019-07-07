const mongoose = require('mongoose');
const requireLogin = require('../redirect/requireLogin');
const requireCredits = require('../redirect/requireLogin');
const Surveys = mongoose.model('surveys')
module.exports = app =>{
    app.post('/api/surveys',requireLogin,requireCredits,(req,res)=>{

        const {title,subject,body,targets} =  req.body;

        const survey = new Surveys({
            title:title,
            subject:subject,
            body:body,
            targets:targets.split(',').map(email=>({email})),
            _user:req.user.id,
            dateSent:Date.now()
        });
        
    });
};