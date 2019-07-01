const keys = require('../config/keys');
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id).then(user=>{
        done(null,user);
    });
});
passport.use(new GoogleStrategy(
    {
        clientID : keys.googleClientID,
        clientSecret : keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
    }, 
    (accesToken,refreshToken,profile,done) => {
        console.log('profile info:',profile);
        User.findOne({googleId:profile.id}).then(exUser=>{
            if(exUser){
                done(null,exUser);
            }else{
                new User({googleId:profile.id,name:profile.displayName}).save()
                .then(user=>{
                    done(null,user);
                });
            }
        });
        
    })
);
