const mongoose = require('mongoose');


const jobschema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    company : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : false,
        default : "Germany"
    },
    salary : {
        type : Number,
        required : true
    },
});

const jobmodel = mongoose.model("jobs", jobschema)
module.exports = jobmodel;
