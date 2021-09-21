const express = require("express");
const router = express.Router();
const DisasterPlan = require('../../models/DisasterPlan')

router.get('/test', (req, res) => {
    res.json("this is the action steps route")
})

// router.post('/disaster_plan/:disasterId', (req, res) => {
//     DisasterPlan.action.push({   
//         owner: req.body.owner, 
//         task: req.body.task, 
//         disasterId: req.params.disasterId
//     })
// }) 

// router.get('/disaster_plan/:disasterId', (req, res) => {
//     DisasterPlan.findById(req.params.disasterId)
//     .then(

//     )
// }) 

module.exports = router