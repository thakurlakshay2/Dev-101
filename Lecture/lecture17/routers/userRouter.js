var express = require("express")
var userRouter = express.Router()
// let {getAllUser,addUser,updateUser,deleteUser} = require("../controllers/userController")
let {signup,login,forgetPassword,resetPassword}=require('../controllers/authController');


    userRouter.route("/signup").post(signup)
    userRouter.route("/login").post(login)
    userRouter.route("/forgetPassword").patch(forgetPassword)
    userRouter.route("/resetPassword").patch(resetPassword)


// userRouter.route("/:id").patch(updateUser).delete(deleteUser)


module.exports = userRouter