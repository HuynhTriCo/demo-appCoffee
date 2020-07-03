const mongoose= require('mongoose')
const Schema= mongoose.Schema
const UserSchema= new Schema({
    fingerPrint:{
        type: String,
        required:true
    }
});

const User= mongoose.model('User',UserSchema);

exports.User=User;
