const passport = require('passport');

module.exports = app =>{

app.get('/auth/google',passport.authenticate('google',{
    scope: ['profile','email']
}));

app.get('/auth/google/callback',passport.authenticate('google'));


app.get('/api/logout',(req,res)=>{
    req.logout();
    res.send('U Loged Out');
});

app.get('/api/cuser',(req,res)=>{
    res.send(req.user);
});

};
// Client Token
// for production build :
// 884136047793-s5kteucp2ped5sdv69edgljigp1qb40b.apps.googleusercontent.com

// Client secret Token :
// VhQXCPqdWH6bbgZTySb-BprR