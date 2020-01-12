const mongoose = require("mongoose")
const config = require("../configs/config")
mongoose.connect(config.DB).then((conn)=>{
    console.log("Connection made")
    // console.log(conn)
})


let planSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter"],
        unique:true
    },
    rating:{
        type:Number,
        default:5
    },    
    averageRating:{
        type:Number,
        default:5
    },
    description:{
        type:String,
        default:"Good Plan"
    },
    preference:{
        type:String,
        enum:["Vegan","Vegetarian","Non-Veg","Eggitarian"]
    },
    price:{
        type:Number,
        min:40
    },
    duration:{
        type:Number,
        min:30
    }
})

const planModel = mongoose.model("planModel",planSchema)
module.exports = planModel