var express = require("express")
var planRouter = express.Router()
let {getAllPlans,addPlan,updatePlan,deletePlan,checkInput,queryAdder} = require("../controllers/planController")
let {protectRoute,isAuthorized}=require('../controllers/authController')
planRouter.route("").get(protectRoute,getAllPlans).post(checkInput,addPlan)
planRouter.route("best-5-plans").get(queryAdder,getAllPlans)

planRouter.route("/:id").patch(updatePlan).delete(protectRoute,isAuthorized(["Admin"]),deletePlan)

module.exports = planRouter

    