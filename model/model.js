const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:(value)=>{
            return validator.isEmail(value)
        },
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:8,
        minLowercase:1,
        minUppercase:1,
        minNumbers:1,
        minSymbols:1
    },
    confirmPassword:{
        type:String,
        required:true,
        trim:true,
        validate: {
            validator: function (value){
            return value===this.password             
        }}
    },
    unique_user_id:
    {type:String },
})

const user = mongoose.model("userData",userSchema);


module.exports = user;