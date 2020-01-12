const userModel=require('../models/userModel')
const jwt=require('jsonwebtoken')
const KEY=require('../configs/config').KEY

module.exports.signup = async function(req,res){
    //create new user
    try{
        const user=await userModel.create(req.body)
        console.log("inside signup",user);
        //payload
        const id=user["_id"];
        //create token
        const token=await jwt.sign(JSON.stringify(id),KEY);    
        //send Token
        res.json({
            user,
            json
        })
    }
    catch(err){
        console.log(err);
    }
    
};

module.exports.login=async function(req,res){
    //
    try{
        //email and password 
        const {email,password}=req.body;
        const user=await userModel.find(email);
        const dbPassword=user.password;
        if(dbPassword==password){
            const id=user["_id"];
            
        }
    }
    catch(err){

    }

}