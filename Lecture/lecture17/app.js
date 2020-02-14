const express = require("express")
const app = express()
// let plans = require("./data/plans")  //json ko modules ki tareh require kr sakte h
// let users = require("./data/users")
const planRouter = require("./routers/planRouter")
const userRouter = require("./routers/userRouter")
const viewRouter = require("./routers/viewRouter")

//postman se post req bhejne kelie body me raw and json kro 
// =>static files
app.use(express.static("public"));

app.set("view engine","pug")
// pug=>render
app.set("views","views");

app.use(express.json())  // ye line islie kuki webserver and client me json h but internet use chunk buffer me bhejte h to ye line us buffer ko json me convert krti h agr json thi pehle buffer wali file
// app.get("/",function(req,res){
//     console.log(req.url);
//     res.render("base.pug")
// })
app.use("/",viewRouter);
app.use("/api/plans",planRouter)
app.use("/api/users",userRouter)
//-----------------------------------------------------------------------------

//Plans
// function getAllPlans(req,res){
//     res.json({
//         plans:plans
//     })
// }

// function addPlan(req,res){
//     const plan = req.body
//     plan.id = plans.length+1;
//     plans.push(plan)
//     res.json({
//         plans   //jb key and value pair same hoti h to jaise yha value plans h likhdo samjh jaiga wo
//     })
// }

// function updatePlan(req,res){
//     console.log(req.params.id)
//     for(x in plans){
//        if( plans[x].id == req.params.id){
//            plans[x].name = req.body.name;
//        }
//     }

//     res.json({
//         plans
//     })
// }

// function deletePlan(req, res) {
    

//     const tarr = plans.filter((el)=>{
//         if(el.id!=req.params.id){
//             return true
//         }
//     })

//    plans = tarr


//     res.send('Got a DELETE request at /user')
//   }


// app.route("/api/plans").get(getAllPlans).post(addPlan)

// app.route("/api/plans/:id").patch(updatePlan).delete(deletePlan)





//---------------------------------------------------------------------------------

//User

// function getAllUser(req,res){
//     res.json({
//         users:users
//     })
// }

// function addUser(req,res){
//     const user = req.body
//     user.id = users.length+1
//     users.push(user)
//     res.json({
//         users
//     })
// }

// function updateUser(req,res){
//     console.log(req.params.id)
//     for(x in users){
//        if( users[x].id == req.params.id){
//            users[x].name = req.body.name;
//        }
//     }

//     res.json({
//         users
//     })
// }

// function deleteUser(req, res) {
    

//     const tarr = users.filter((el)=>{
//         if(el.id!=req.params.id){
//             return true
//         }
//     })

//    users = tarr


//     res.send('Got a DELETE request at /user')
//   }

// app.route("/api/users").get(getAllUser).post(addUser)

// app.route("/api/users/:id").patch(updateUser).delete(deleteUser)




//---------------------------------------------------------------------------------------




app.listen(3000,()=>{
    console.log("server is listening at 3000")
})