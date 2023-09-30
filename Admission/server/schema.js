var mongoose = require('mongoose');
var userSchema=new mongoose.Schema({
    name:{
        type:String
    }, 
    district:{
        type:String
    },
    admission:{
        type:Number
    }
});
module.exports=mongoose.model('User',userSchema)