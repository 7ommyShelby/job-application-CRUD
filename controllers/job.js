const jobmodel = require('../models/jobschema');


const createjob = async (req, res) => {
    try {
        const jobobj = req.body

        //the lines below will save the data in mongo db

        const newjob = new jobmodel(jobobj);
        await newjob.save()
        console.log(req.body);

        res.json({
            success: true,
            message: "Created a job sucessfully"
        })

    } catch (error) {
        res.json({
            success: false,
            message: "Something went wrong, please try again!"
        })
    }
}

const listjob = async (req, res) => {
    try {
        const listofjobs = await jobmodel.find();

        res.json({
            success: true,
            message: "Listed job",
            jobs: listofjobs
        })

    } catch (error) {
        res.json({
            success: false,
            message: "Something went wrong, please try again!"
        })
    }

}
const editjob = async (req, res) => {
    try {

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
    } catch (error) {
        res.json({
            success: false,
            message: "Something went wrong, please try again!"
        })
    }

}
const deletejob = async (req, res) => {
    try {
        const jobid = req.params.id;

        const findjob = {
            company: "Tech Innovations Inc."
        }

        await jobmodel.findOneAndDelete(findjob)

        res.json({
            success: true,
            message: "Delete job"
        })

    } catch (error) {
        res.json({
            success: false,
            message: "Something went wrong, please try again!"
        })
    }

}

const jobcontroller = {
    createjob, listjob, editjob, deletejob
}

module.exports = jobcontroller;