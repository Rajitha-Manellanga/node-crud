const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    "regno":{
        type: String,
        required: true,
    },
    "name":[{
        "fname":{ type:String, required:true},
        "lname":{ type:String, required:true}
    
    }],

 
});

module.exports = mongoose.model('User',userSchema);