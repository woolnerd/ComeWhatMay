const { response } = require("express");
const express = require("express");
const router = express.Router();
const DisasterPlan = require('../../models/DisasterPlan')
const validateDisasterPlanInput = require('../../validations/disaster_plan');

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

router.get('/show/:disasterId', (req, res) => {
    DisasterPlan.findById(req.params.disasterId)
        .then(plan => res.json(plan))
        .catch(err =>
            res.status(404).json({ error: 'Sorry plan wasn\'t found' })
           );
})

router.get('/index/:profileId', (req, res) => {
    DisasterPlan.find({profileId: req.params.profileId })
        .then(plans => res.json(plans))
        .catch(err =>
            res.status(400).json({ error: 'Sorry plans wern\'t found' })
           );
})

router.put('/update/:disasterId', (req, res) => {
    DisasterPlan.findByIdAndUpdate(req.params.disasterId, req.body)
     .then(disaster => DisasterPlan.findById(disaster.id))
        .then(updatedDis => res.json(updatedDis))
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

router.post('/:disasterId/action/create', (req, res) => {

    const disasterId = req.params.disasterId
    let newActionDetails = req.body
    DisasterPlan.findByIdAndUpdate(disasterId, 
        { '$push': {'actions': newActionDetails}}, 
        )
        .then(disaster => DisasterPlan.findById(disaster.id))
            .then(updatedDisaster => res.json(updatedDisaster))
        .catch(err =>
        res.status(400).json({ error: 'Unable to create new Action Step' })
        );
    
})

router.put('/:disasterId/action/update/:actionId', (req, res) => {

    const disasterId = req.params.disasterId
    const actionId = req.params.actionId

    let updatedAction = req.body;
    updatedAction._id = actionId

        DisasterPlan.findOneAndUpdate(
            { "_id" : disasterId, "actions._id" : actionId},
            { $set: { "actions.$" : updatedAction} }
        ).then(disaster => DisasterPlan.findById(disaster.id))
            .then(disaster => res.json(disaster))
            .catch(err =>
                res.status(400).json({ error: 'Unable to update Action Step' })
                );
})

router.delete('/:disasterId/action/delete/:actionId', (req, res) => {

    const disasterId = req.params.disasterId
    const actionId = req.params.actionId

    DisasterPlan
        .findById(disasterId)
        .select('actions')
        .then(disaster => {
            let action = disaster.actions.id(actionId)

            if (action !== null){
                disaster.actions.pull({"_id": actionId })
            }
            disaster.save()
            .then(updatedDisaster => res.json(updatedDisaster))
            .catch(err =>
                res.status(400).json({ error: 'Unable to delete action step' })
            );
        })
})

module.exports = router;