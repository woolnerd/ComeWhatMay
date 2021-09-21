const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Relative  = require('../../models/Relative');
const validateRelativeInput = require('../../validations/relatives')

router.get('/:profile_id', (req, res) => {
    Relative.find({profile: req.params.profile_id})
    .then(relative => res.json(relative))
    .catch(err =>
            res.status(404).json({ noRelativeFound: 'No household memebers found associated to profile' }
        )
    );
});

router.post('/',
    (req, res) => {
      const { errors, isValid } = validateRelativeInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newRelative = new Relative({
        profile: req.body.profile, 
        name: req.body.name, 
        age: req.body.age, 
        relationship: req.body.relationship, 
        phoneNumber: req.body.phoneNumber
      });
  
      newRelative.save().then(relative => res.json(relative));
    }
  );

  router.delete('/:id', (req, res) => {
  Relative.findById(req.params.id)
    .then(relative => relative.remove()
    .then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ noRelativeFound: 'No household members found with that ID' }))
})

router.put('/update/:id', (req, res) => {
    Relative.findByIdAndUpdate(req.params.id, req.body)
        .then(relative => Relative.findById(relative.id))
        .then(relative => res.json(relative))
        .catch(err => res.status(404).json({ noRelativeFound: 'No household members found with that ID' }))
});

module.exports = router;