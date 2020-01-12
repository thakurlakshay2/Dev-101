let users = require("../data/users")

module.exports.getAllUser = function(req,res){
    res.json({
        users:users
    })
}

 module.exports.addUser=function(req,res){
    const user = req.body
    user.id = users.length+1
    users.push(user)
    res.json({
        users
    })
}

 module.exports.updateUser=function(req,res){
    console.log(req.params.id)
    for(x in users){
       if( users[x].id == req.params.id){
           users[x].name = req.body.name;
       }
    }

    res.json({
        users
    })
}

 module.exports.deleteUser=function(req, res) {
    

    const tarr = users.filter((el)=>{
        if(el.id!=req.params.id){
            return true
        }
    })

   users = tarr


    res.send('Got a DELETE request at /user')}
