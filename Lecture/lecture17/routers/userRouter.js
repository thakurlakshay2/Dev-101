var express = require("express")
var userRouter = express.Router()
// let {getAllUser,addUser,updateUser,deleteUser} = require("../controllers/userController")
let {signup}=require('../controllers/authController');

try{
    userRouter.route("/signup").post(signup)

}
catch(err){
    console.log(err);
}
// userRouter.route("/:id").patch(updateUser).delete(deleteUser)


module.exports = userRouter