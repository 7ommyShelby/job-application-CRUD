const express = require("express");

const router = express.Router()

const {createjob, listjob, editjob, deletejob} = require("../controllers/job")

router.post('/api/jobs', createjob)

router.get('/api/jobs', listjob)

router.put('/api/jobs/:id', editjob)

router.delete('/api/jobs/:id', deletejob)


module.exports = router;