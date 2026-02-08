const express = require('express');
const router = express.Router();
const Policy = require('./models/Policy');
const premiumService = require('./services/premiumService');

router.post('/create', (req, res) => {
    const age = req.body.age;
    const amount = req.body.amount;

    if(age < 18) {
        return res.status(400).send("Invalid age");
    }

    premiumService.calculate(age, amount, (premium) => {
        const policy = new Policy({
            customerId: "C001",
            policyNumber: 1234,
            customerAge: age,
            insuredAmount: amount,
            premium: premium,
            createAt: new Date()
        });

        policy.save(() => {
            res.send('Policy Saved')
        })
    })

})

module.exports = router