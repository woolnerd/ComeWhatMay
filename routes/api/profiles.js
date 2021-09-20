const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');

// const jwt = require('jsonwebtoken');

const Profile  = require('../../models/Profile');
const validateProfileInput = require('../../validations/profile');

router.get('/test', (req, res) => res.json({ msg: "This is the profile route" }));

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateProfileInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newProfile = new Profile({
        user: req.user.id, 
        householdSize: req.body.householdSize, 
        householdName: req.body.householdName, 
        phoneNumber: req.body.phoneNumber, 
        email: req.body.email
      });
  
      newProfile.save().then(profile => res.json(profile));
    }
  );

// router.get('user/:user_id', (req, res) => {
//     Profile.find({user: req.params.user_id})
//     .then(profile => res.json(profile))
//     .catch(err =>
//             res.status(404).json({ noProfileFound: 'No profile found associated to user' }
//         )
//     );
// });

router.get('/:id', (req, res) => {
    Profile.findById(req.params.id)
        .then(profile => res.json(profile))
        .catch(err =>res.status(404).json({ noProfileFound: 'No profile found with that ID' }));
});

// router.delete('/:id', (req, res) => {
//   Profile.findById(req.params.id)
//     .then(profile => profile.remove()
//     .then(() => res.json({ success: true })))
//     .catch(err => res.status(404).json({ noProfileFound: 'No profile found with that ID' }))

//     //Profile.findByIdAndDelete()
// })


// router.put('/:id', (req, res) => {
//     Profile.findByIdAndUpdate({id: req.params.id}, req.body)
//         .then(function(){
//             Profile.findOne({id: req.params.id})
//             .then(function(profile){
//                 res.send(profile)
//             })
//         })
// });

module.exports = router;
