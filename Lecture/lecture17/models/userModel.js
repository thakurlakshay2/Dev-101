const mongoose = require("mongoose")
const validator=require("validator");
const config = require("../configs/config")
const crypto=require('crypto')
mongoose.connect(config.DB).then((conn)=>{
    console.log("Connection made")
    // console.log(conn)
})


let userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter"]
    },
    // username:{
    //     type:String,
    //     required:[true,"Please enter"],
    //     unique:true
    // },
    password:{
        type:String,
        minlength:8,
        required:true
    },
    confirmpassword:{
        type:String,
        minlength:8,
        validate:function(){
            return this.password==this.confirmpassword;
        }
    },
    email:{
        type:String,
        unique:true,
        validate:validator.isEmail
    },
    phone:{
        type:Number
    },
    role:{
        type:String,
        enum:["admin","restaurant owner","user"],
        default:"user"
    },
    token:{
        type:String
    }
})

userSchema.pre("save",function(){
    //encrypt=>password

    //confirm password => remove
    this.confirmpassword=undefined;
})
userSchema.method("generateToken",function(){
    //DB
     this.token=crypto.randomBytes(32).toString("hex");
    //email
    return this.token   
})
//model
const userModel = mongoose.model("userModel",userSchema)
module.exports = userModel