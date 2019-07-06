const express = require('express');
const app = express();
const Cookie = require('cookie-session');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./models/User');
require('./services/passport');
const keys = require('./config/keys');


mongoose.connect(keys.DBURI, {useNewUrlParser: true});

app.use(bodyParser.json());

app.use(Cookie({
    maxAge:30 * 24 * 60 * 60 *1000,
    keys:[keys.CookieToken]
}));
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);
require('./routes/paymentRoutes')(app);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve('__dirname','client','build','index.html'));
    })
}
// local development links:
// localhost:5000/auth/google
// localhost:5000/api/cuser

const PORT = process.env.PORT || 5000;
app.listen(PORT);