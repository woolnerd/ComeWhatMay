const express = require("express");
const router = express.Router();
const DisasterPlan = require('../../models/DisasterPlan')
const {errors, isValid} = validateDisasterPlanInput = require('../../validations/disaster_plan');

router.post('/create/:profileId', (req, res) => {
    const {errors, isValid} = validateDisasterPlanInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const newDisasterPlan = new DisasterPlan({
        name: req.body.name, 
        targetTime: req.body.targetTime,
        disasterType: req.body.disasterType,
        profileId: req.params.profileId
    })

    newDisasterPlan.save()
        .then(disaster => res.json(disaster))
        .catch(err => console.log(err));
})

router.get('/index/:profileId', (req, res) => {
    DisasterPlan.find({profileId: req.params.profileId })
        .then(plans => res.json(plans))
})

router.get('/:disaster_id', (req, res) => {
    const {errors, isValid} = validateDisasterPlanInput(req.body);
    if(!isValid) {
        return res.status(400).json(errors);
    }
    DisasterPlan.findById(req.params.disaster_id)
        .then(disaster => res.json(disaster))
})


router.put('/update/:disasterId', (req, res) => {
    DisasterPlan.findByIdAndUpdate(req.params.disasterId, req.body)
     .then(disaster => res.json(disaster))
     .catch(err =>
      res.status(400).json({ error: 'Unable to update disaster plan' })
     );
});

router.delete('/delete/:disasterId', (req, res) => {
    DisasterPlan.findOneAndDelete({ _id: req.params.disasterId})
    .then(() => res.json({success: true}))
    .catch(err =>
    res.status(400).json({ error: 'Unable to delete disaster plan' })
    );
})


module.exports = router;