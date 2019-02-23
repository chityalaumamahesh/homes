var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var userSchema = new Schema({
    username: {type:String, lowercase:true, unique:true, required:true},
    password: {type:String, required:true},
    email: {type:String, lowercase:true, unique:true, required:true}
}); 

userSchema.pre('save', function(next) {
  // do stuff
  var user = this;
  bcrypt.hash(user.password,null, null , function(err,hash){
    if(err) return next(err);
    user.password = hash;
    next();
  })
});

module.exports = mongoose.model('User', userSchema);