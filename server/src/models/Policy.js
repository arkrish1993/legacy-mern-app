const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
    customerId: String,
    policyNumber: {type: Number, unique: true},
    customerAge: Number,
    insuredAmount: Number,
    premium: Number,
    createAt: Date,
    status: {
        type: String,
        enum: ["APPROVED", "PENDING", "DENIED"],
        default: "PENDING"
    }
})

module.exports = mongoose.model("Policy", policySchema);
