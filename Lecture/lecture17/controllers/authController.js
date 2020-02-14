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
            token
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
        const user=await userModel.findOne({email});
        // console.log(user.email);
        const dbPassword=user.password;
        if(dbPassword==password){
            const id=user["_id"];
            const token=await jwt.sign(JSON.stringify(id),KEY);  
            console.log(token);
            return res.json({
                user,
                token
            })
            
        }
        else{
            res.json({
                "data":"something went wrong"
            })
        }
    }
    catch(err){
        console.log(err)
    }

}

module.exports.protectRoute=async function(req,res,next){
    //Get the token
    try{

    
    let token=req.headers["authorization"]
    token=token.split(" ");
    token=token[1];
    console.log(token)

    //verify the token
    const ans=await jwt.verify(token,KEY);

    //if verify call next
    if(ans){
        next();
    }
    else{
        res.json({
            data:"Your token is tampered"
        })
    }
    }
    catch(err){
        console.log(err);
    }
}

module.exports.isAuthorized= function(arr){
    return function(req,res,next){
        var {role}=req.user;
        if(arr.includes(role)==true){
            next();
        }
        else{
            return res.json({
                data:"You are not Authorized"
            })
        }
    }
}

module.exports.forgetPassword=async function(req,res){
    //1.email
    try{

    
    if(req.body.email){
        let {email}=req.body;
        let user=await userModel.findOne({email});
        let token=user.generateToken();
        // user.phone="123456789"
        user.save({validateBeforeSave:false})
        res.json({
            token,
            user
        })                                                                                                                                 
    }
    else{
        res.json({
            data:"Enter Your Email"
        })
    }
    }
    catch(err){
        console.log(err);
    }
     //2. find one user
    //3. DB user =>random token

    //4. Client =>token
   
}

module.exports.resetPassword=async function(req,res){
    //1. token
    //2. find user=>
    //3. user=> update user=>password , update password, token=>undefined
    // await user.save()
    try{
        if(req.body && req.body.token && req.body.password && req.body.confirmpassword){
      
            const {token,password,confirmpassword}=req.body
            console.log({token});
            let user=await userModel.findOne({token});
            console.log(user);
            user.password=password;
            user.confirmpassword=confirmpassword;
            user.token=undefined;
            user.save();
            res.json({
                data:"Your password is reset"
            })
        }
        else{
            res.json({
                data:"Enter complete data"
            })
        }
      
    }
    catch(err){
        console.log(err)
    }

}