const express = require("express");
const mongoose = require("mongoose");
const policyRoutes = require('./policyRoutes');

const app = express();

app.use(express.json());

// DO NOT HARDCODE
mongoose.connect('mongodb://localhost:27017/legacydb');

app.use('/policy', policyRoutes);

app.listen(3000, () => {
    console.log('Server running');
})

/*
Problems
1. hardcoded url
2. exposed port
3. no error handling
4. app handles everything
*/