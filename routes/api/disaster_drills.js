const { response } = require("express");
const express = require("express");
const router = express.Router();
const DisasterDrill = require('../../models/DisasterDrill')
const validateDisasterDrillInput = require('../../validations/disaster_drill')

router.get('/index/:planId', (req, res) => {
    DisasterDrill.find({disPlan: req.params.planId})
    .then(drills => res.json(drills))
    // .catch(err => console.log(err));
}) 

router.post('/create/:planId', (req, res) => {
    const {errors, isValid} = validateDisasterDrillInput(req.body)
    if(!isValid) {
        return res.status(400).json(errors);
    }
    const newDisasterDrill = new DisasterDrill({
        timeToStart: req.body.timeToStart, 
        disPlan: req.params.planId
    })
    newDisasterDrill.save()
        .then(drill => res.json(drill))
        // .catch(err => console.log(err));
}) 

router.put('/update/:drillId', (req, res) => {
    DisasterDrill.findByIdAndUpdate(req.params.drillId, req.body)
        .then(drill => DisasterDrill.findById(drill.id))
        .then(updatedDrill => res.json(updatedDrill))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update drill' })
        );
}) 

router.delete('/delete/:drillId', (req, res) => {
    DisasterDrill.findOneAndDelete({ _id: req.params.drillId})
    .then(() => res.json({success: "drill deleted"}))
    .catch(err =>
    res.status(400).json({ error: 'Unable to delete drill' })
    );
}) 

module.exports = router;