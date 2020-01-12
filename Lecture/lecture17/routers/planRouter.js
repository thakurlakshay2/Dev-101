var express = require("express")
var planRouter = express.Router()
let {getAllPlans,addPlan,updatePlan,deletePlan,checkInput,queryAdder} = require("../controllers/planController")

planRouter.route("").get(getAllPlans).post(checkInput,addPlan)
planRouter.route("best-5-plans").get(queryAdder,getAllPlans)
planRouter.route("/:id").patch(updatePlan).delete(deletePlan)

module.exports = planRouter

    