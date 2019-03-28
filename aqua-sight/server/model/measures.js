var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
mongoose.connect('mongodb://admin:admin123@ds225294.mlab.com:25294/aquasight');
autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var measuresSchema = new Schema({
  Id:{type:Number,ref:'measures'},
  TimeStamp :{type:Date, timezone: 'America/New_York'},
  Flow:{type:Number},
  Pressure:{type:Number}
});

measuresSchema.plugin(autoIncrement.plugin, 'measures');
var measures= mongoose.model('measures', measuresSchema);


module.exports=measures;

