var express = require('express');
var router = module.exports = express.Router();
var mongoose = require('mongoose');
var measures= require('./model/measures');
var counters= require('./model/measures');

mongoose.connect('mongodb://admin:admin123@ds225294.mlab.com:25294/aquasight',function(err){
  if (err) throw err;
  console.log("successfully connected to database");
});
router.get('/details',function(req,res){
  measures.find({}).then(data => {
    if (data){
      res.status(200).json(data);
    }
    else {
      res.json(data);
    }
  }).catch(error =>{
    res.status(500).json({
      message: "Fetching data failed!"
    });
  });
});

router.get('/details/:id', function(req,res){
  const id = req.params.id
  measures.findById({id}),function(err, data){
    if(err)
      console.log(err)
    else
      res.json(data);
  }
})

router.get('/details/:timestamp', function(req,res){
  const timestamp = req.params.timestamp
  measures.findByTimeStamp({timestamp}),function(err, data){
    if(err)
      console.log(err)
    else
      console.log(data);
  }
})

router.post('/details/add',function(req,res){
  let measure = new measures(req.body);
  console.log(req.body);
  measure.save()
        .then(doc =>{
          res.status(200).json({'Measure':'Added Successfully'});
        })
        .catch(err =>{
          res.status(400).send('Failed to add');
        });
      })


