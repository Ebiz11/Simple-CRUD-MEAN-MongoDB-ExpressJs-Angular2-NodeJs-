const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas form the db
router.get('/ninjas', function(req, res, next){
  Ninja.find({}).sort({_id: -1}).then(function(ninja){
    res.json(ninja);
  });
});

// get a id of ninjas form the db
router.get('/ninjas/:id', function(req, res, next){
  Ninja.find({_id: req.params.id}).then(function(ninja){
    res.json(ninja);
  });
});

// add a new ninja to the db
router.post('/ninjas', function(req, res, next){
  Ninja.create(req.body).then(function(ninja){
    res.json(ninja);
  }).catch(next);
});

// update a ninja in the db
router.put('/ninjas/:id', function(req, res, next){
  Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Ninja.findOne({_id: req.params.id}).then(function(ninja){
        res.json(ninja);
    });
  });
});

// delete a ninja form the db
router.delete('/ninjas/:id', function(req, res, next){
  Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
    res.json(ninja);
  });
});

// exports router
module.exports = router;
