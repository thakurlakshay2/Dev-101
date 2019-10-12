var https=require("https");
var fs=require("fs");

var options={
    hostname: "jsonplaceholder.typicode.com",
    post:443,
    path:"/users",
    method:"GET"
}

var request=https.request(options,function(res){
    var counter =0;
    var data="";
    // console.log(res);
    res.on("data",function(chunk){
        // console.log(chunk);            //hexadecimal packets
        data=data+chunk;               //changed to string
        counter++;
    });
    res.on("end",function(){
        console.log("Data stream has been ended");
        console.log(counter);
        console.log(typeof data);
        var json=JSON.parse(data);                          //changing string to object
        for(var i=0;i<json.length;i++){
           var fileName=json[i]["username"];
            var detail=json[i]; 
        //    console.log(detail);
          
            fs.writeFileSync(fileName,JSON.stringify(detail));
           
        }
        // console.log(json);
        // console.log(data);
    });
})

request.end();