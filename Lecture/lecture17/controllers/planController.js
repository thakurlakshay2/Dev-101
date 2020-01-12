let plans = require("../data/plans")
let planModel = require("../models/planModel")

module.exports.checkInput = function(req,res,next){
    console.log(req.body)
    if( Object.keys(req.body).length===0){
        console.log("undef")
        return(   res.json({
            error:"no data"
        }))
    }
   next();
    
}
module.exports.queryAdder=async function(req,res,next){
    req.query={}
    next();
}

module.exports.getAllPlans  = async function(req,res){
    console.log(req.query);
    //filtering
    //exclude special terms=> sort filter  page from query
    var oQuery={...req.query};
    var earr=["sort","filter","page","limit"]
    for(var i=0;i<earr.length;i++){
        delete(req.query[earr[i]]);
    }
  
    
    console.log(req.query);
    let str=JSON.stringify(req.query);
    //gt
    
    str=str.replace(/gt|gte|lt|lte/g,function(match){
        return "$"+match;
    })
    
    const data=JSON.parse(str);
    
     plans = planModel.find(data);
    if(oQuery.sort){
        console.log("in sort")
        var sortString=oQuery.sort.split("%").join(" ");
        plans.sort(sortString);
    }
    if(oQuery.filter){  
        let filterQuery=(oQuery["filter"]).split("%").join(" ");
        plans.select(filterQuery);
    }
    // let filterQuery
    const page=Number(oQuery.page) || 1;
    const limit=Number(oQuery.limit) || 1;
    const toSkip=(page-1)*limit;
    plans=plans.skip(toSkip).limit(limit);

    plans=await plans;
    

    res.json({
        plans:plans
    })
}

module.exports.addPlan =async function(req,res){
    const plan = req.body
    const newPlan = await planModel.create(plan);
    // plan.id = plans.length+1;
    // plans.push(plan)
    res.json({
        newPlan
      //  plans   //jb key and value pair same hoti h to jaise yha value plans h likhdo samjh jaiga wo
    })



}

module.exports.updatePlan = async function(req,res){
    console.log(req.params.id)
    // for(x in plans){
    //    if( plans[x].id == req.params.id){
    //        plans[x].name = req.body.name;
    //    }
    // }

    let some = await planModel.update({"_id":req.params.id},req.body)

   
    

    res.json({
        some
    })
}

module.exports.deletePlan = async function(req, res) {
    

//     const tarr = plans.filter((el)=>{
//         if(el.id!=req.params.id){
//             return true
//         }
//     })

//    plans = tarr

await planModel.deleteOne({"_id":req.params.id},function(err){
    console.log(err)
})


    res.send('Got a DELETE request at /user')
  }

