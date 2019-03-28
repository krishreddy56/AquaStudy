var express = require('express');
var app = express();
var measures=require('./model/measures');
var bodyParser = require('body-parser');
var profile = require('./profile');
var cors =  require('cors');
app.use(cors());
app.use(bodyParser.json());

var router = module.exports = express.Router();

//var urlencodedparser = bodyparser.urlencoded({extended:false});
var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin123@ds225294.mlab.com:25294/aquasight',function(err){
  if (err) throw err;
  console.log("successfully connected to database");
});

app.use('/', router);
app.use('/api',profile);
app.listen(4000, () => console.log("successfully connected"));
