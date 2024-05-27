const express = require("express");
require("dotenv").config();
const mongoose = require('mongoose');

const key = process.env.MONGOOSE_KEY

const app = express();
app.use(express.json());

const port = 10000;

const jobroutes = require('./routes/jobs')

mongoose
.connect(key)
.then(() => {
    console.log("connection established with mongoose");
})
.catch((err) => {
    console.log(err,"Could not connect to mongoose! Try again");
})


app.use(jobroutes);
app.listen(port, () => {
    console.log("Server running at :", port);
})