const express = require('express');
const app = express();
const Cookie = require('cookie-session');
const mongoose = require('mongoose');
const passport = require('passport');

require('./models/User');
require('./services/passport');
const keys = require('./config/keys');


mongoose.connect(keys.DBURI);

app.use(Cookie({
    maxAge:30 * 24 * 60 * 60 *1000,
    keys:[keys.CookieToken]
}));
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);
// local development links:
// localhost:5000/auth/google
// localhost:5000/api/cuser

const PORT = process.env.PORT || 5000;
app.listen(PORT);