const express = require("express");
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const jobroutes = require('./routes/jobs')

mongoose
.connect("mongodb+srv://7ommyShelby:7ommyShelby@jobapp.vjpdtlr.mongodb.net/")
.then(() => {
    console.log("connection established with mongoose");
})
.catch((err) => {
    console.log(err,"Could not connect to mongoose! Try again");
})


app.use(jobroutes);
app.listen(10000, () => {
    console.log("Server running at 8000");
})