const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretToken);
const requireLogin = require('../redirect/requireLogin');
module.exports = app =>{
    app.post('/api/payus',requireLogin,async (req,res) => {
        console.log(req.body.id);
        

        const charge = await stripe.charges.create({
            amount:200,
            currency:'usd',
            description:'5$ for 5 Credits',
            source:req.body.id
        });

        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user);
        
        
    });
};