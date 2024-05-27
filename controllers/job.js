const jobmodel = require('../models/jobschema');


const createjob = async (req, res) => {
    const jobobj = req.body

    //the lines below will save the data in mongo db

    const newjob = new jobmodel(jobobj);
    await newjob.save()
    console.log(req.body);

    res.json({
        success: true,
        message: "Created a job sucessfully"
    })
}

const listjob = async (req, res) => {

    const listofjobs = await jobmodel.find();

    res.json({
        success: true,
        message: "Listed job",
        jobs: listofjobs
    })
}
const editjob = async (req, res) => {

    // const findjob = {
    //     location : "Pune" 
    // }

    const findjob = {
        salary: { $gt: 20000 }
    }

    const updatejob = {
        location: "Goa"
    }

    // await jobmodel.updateMany(findjob, updatejob)
    await jobmodel.findOneAndUpdate(findjob, updatejob)
    

    res.json({
        success: true,
        message: "Edit job"
    })
}
const deletejob = async (req, res) => {

    const jobid = req.params.id;

    const findjob = {
        company : "Tech Innovations Inc."
    }

    await jobmodel.findOneAndDelete(findjob)

    res.json({
        success: true,
        message: "Delete job"
    })
}

const jobcontroller = {
    createjob, listjob, editjob, deletejob
}

module.exports = jobcontroller;