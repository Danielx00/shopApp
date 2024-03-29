const router = require('express').Router();
const stripe = require('stripe')('sk_test_51KU7JvAJyqcnFeJiFDqKZG2lf7ReZxIivAXh0SKYSoXrxlNANPAGUqugNIVhWWwT2bA8xs6R33BLRinYMwhi6ZZ300B8HoDdpY');


router.post('/payment', (req,res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
    }, (stripeErr, stripeRes) => {
        if(stripeErr) {
            res.status(500).json(stripeErr);
        } else {
            res.status(200).json(stripeRes);
        }
    })
})


module.exports = router;